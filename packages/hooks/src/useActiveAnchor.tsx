"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

export const useActiveAnchor = (htmlContent: string) => {
  const [activeHash, setActiveHash] = useState<string>("");
  const anchorListsRef = useRef<{ [key: string]: HTMLElement | null }>({});
  const tabRef = useRef<HTMLDivElement | null>(null);

  const moveTabToAnchor = useCallback(
    (btn: HTMLElement) => {
      if (!tabRef.current) return;
      tabRef.current.style.height = `${btn.offsetHeight}px`;
      tabRef.current.style.top = `${btn.offsetTop}px`;
    },
    [activeHash]
  );

  const handleHashChange = () => {
    setActiveHash(window.location.hash);
  };

    useEffect(() => {
    // Initialize the active hash when the component mounts
    handleHashChange();

    // Listen for hash change events
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      // Cleanup the event listener on unmount
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (!htmlContent) return;

    const observerTimeout = setTimeout(() => {
      const headings = document.querySelectorAll(
        "h2[id], h3[id], h4[id], h5[id], h6[id]"
      );

      const observer = new IntersectionObserver(
        (entries) => {
          const visibleHeadings = entries.filter(
            (entry) => entry.isIntersecting
          );
          if (visibleHeadings.length > 0) {
            const sorted = visibleHeadings.sort(
              (a, b) =>
                a.target.getBoundingClientRect().top -
                b.target.getBoundingClientRect().top
            );
            const activeId = sorted?.[0]?.target.id;
            if (activeId) {
              setActiveHash(`#${activeId}`);
              if (anchorListsRef.current) {
                moveTabToAnchor(
                  anchorListsRef.current[activeId] as HTMLElement
                );
              }
            }
          }
        },
        {
          rootMargin: "0px 0px -90% 0px", // Triggers earlier when scrolling down
          threshold: 0.2,
        }
      );

      headings.forEach((heading) => observer.observe(heading));

      return () => {
        headings.forEach((heading) => observer.unobserve(heading));
      };
    }, 100); // slight delay to ensure DOM is painted

    return () => clearTimeout(observerTimeout);
  }, [htmlContent]); // Re-run when htmlContent changes

  const handleHashClick = (hash: string) => {
    setActiveHash(hash);
  };

  return {
    handleHashChange,
    handleHashClick,
    activeHash,
    anchorListsRef,
    moveTabToAnchor,
    tabRef,
  };
};
