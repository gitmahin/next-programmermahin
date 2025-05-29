import { CodeBlock } from "@/components/shiki";
import React from "react";

const code = `.terminal_wrapper {
  position: relative;
  contain: strict;
  width: 100%;
  height: 880px;
  perspective: 4000px;
  perspective-origin: 100% 0;
  transform-style: preserve-3d;
}

.terminal_canvas {
  position: absolute;
  inset: 0;
  border-radius: 10px;
  border: 1px solid var(--border-color-800C);
  width: 1900px;
  height: 1000px;
  left: -500px;
  transform: scale(1.2) rotateX(47deg) rotateY(31deg) rotate(324deg);
  transform-origin: top left;
  backface-visibility: hidden;
}







`;

export const TrmStyle = () => {
  return (
    <CodeBlock lang="css" className="text-[14px]">
      {code}
    </CodeBlock>
  );
};
