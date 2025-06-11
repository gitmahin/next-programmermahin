"use client";
import React, { useEffect, useRef, useState } from "react";

export const PopupCodeBlock = ({ children }: { children: React.ReactNode }) => {
 const boxRef = useRef<HTMLDivElement | null>(null);
  const floatingRef = useRef<HTMLDivElement | null>(null);
  const originalRect = useRef<DOMRect | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isExpanded]);

  const expand = () => {
    const box = boxRef.current;
    if (!box) return;

    const rect = box.getBoundingClientRect();
    originalRect.current = rect;

    // Clone the element
    const clone = box.cloneNode(true) as HTMLDivElement;
    floatingRef.current = clone;

    Object.assign(clone.style, {
      position: "fixed",
      top: `${rect.top}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      margin: "0",
      zIndex: "9999",
      transition: "all 400ms ease",
      transform: "none",
      borderRadius: "10px",
      overflow: "hidden",
      background: getComputedStyle(box).background,
    });

    clone.classList.add("popup-code-floating");

    // Inject close button manually inside the clone
    const closeBtn = document.createElement("button");
    Object.assign(closeBtn.style, {
      position: "absolute",
      top: "10px",
      right: "10px",
      width: "30px",
      height: "30px",
      background: "#f87171",
      borderRadius: "50%",
      border: "none",
      cursor: "pointer",
      zIndex: "10000",
    });
    closeBtn.onclick = collapse;
    clone.appendChild(closeBtn);

    document.body.appendChild(clone);

    // Force reflow
    void clone.offsetWidth;

    // Animate to center
    Object.assign(clone.style, {
      top: "50%",
      left: "50%",
      width: "100%",
      height: "100%",
      transform: "translate(-50%, -50%)",
    });

    setIsExpanded(true);
  };

  const collapse = () => {
    const clone = floatingRef.current;
    const rect = originalRect.current;
    if (!clone || !rect) return;

    Object.assign(clone.style, {
      top: `${rect.top}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      transform: "none",
    });

    // Wait for transition to finish, then remove
    clone.addEventListener(
      "transitionend",
      () => {
        clone.remove();
        floatingRef.current = null;
        setIsExpanded(false);
      },
      { once: true }
    );
  };

  return (
    <>
      <div
        ref={boxRef}
        className="transition-all relative my-[1.71429em] group"
      >
        <div className="flex w-fit justify-start items-center gap-1.5 absolute top-3.5 left-3.5 ">
          <div
            onClick={collapse}
            className={`w-[15px] h-[15px] transition-all duration-300 flex-shrink-0 border rounded-full border-border-color_800C filter grayscale opacity-20 group-hover:opacity-100 group-hover:!grayscale-0 bg-red-500 `}
          ></div>
          <div
          onClick={() => window.alert("Hello wrold")}
            className={`w-[15px] h-[15px] transition-all duration-300 flex-shrink-0 border rounded-full border-border-color_800C filter grayscale opacity-20 group-hover:opacity-100 group-hover:!grayscale-0 bg-yellow-400 `}
          ></div>
          <div
            onClick={expand}
            className={`w-[15px] h-[15px] transition-all duration-300 flex-shrink-0 border rounded-full border-border-color_800C filter grayscale opacity-20 group-hover:opacity-100 group-hover:!grayscale-0 bg-emerald-500`}
          ></div>
        </div>
        {children}
      </div>
    </>
  );
};
