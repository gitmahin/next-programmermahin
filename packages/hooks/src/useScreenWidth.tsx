"use client"
import { useEffect, useState } from "react";

export function useScreenWidth() {
  const [width, setWidth] = useState(0); // Default to 0 or null

  useEffect(() => {
    // Run only on client
    if (typeof window !== "undefined") {
      const handleResize = () => setWidth(window.innerWidth);
      setWidth(window.innerWidth); // Set initial width
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return width;
}
