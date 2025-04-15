import { useEffect, useState } from "react";

export const useGetAnchors = (content: string) => {
  const [anchors, setAnchors] = useState<string[]>([]);
  useEffect(() => {
    const headingLinks: string[] = []; // Temporary array to hold the anchor labels

    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    headings.forEach((heading) => {
      const id = heading.getAttribute("id");
      if (id) {
        const formattedText = id
          .split("-") // Split the string by "-"
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
          .join(" "); // Join the words back with spaces

        headingLinks.push(formattedText);
      }
    });

    setAnchors(headingLinks); // Set the anchors state with the updated array
  }, [content]);

  return { anchors };
};
