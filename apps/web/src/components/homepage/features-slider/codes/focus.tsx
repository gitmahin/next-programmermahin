import { CodeBlockWithoutTypes } from "@/components/shiki/codeBlockWithoutTypes";

const code = `
"use client";
import React, { useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null); // [!code focus]

  const handleFocusClick = () => {
    inputRef.current?.focus(); // [!code focus]
  };

  const handleFocus = () => {
    console.log("Input is focused!");
  };

  const handleBlur = () => {
    console.log("Input lost focus.");
  };

  return (
    <div className="p-4 space-y-4">
      <input
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        type="text"
        placeholder="Click the button to focus me"
        className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
      />

      <button
        onClick={handleFocusClick}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Focus Input
      </button>
    </div>
  );
}
`

export const FocusCodeExample = () => {
  return (
    <CodeBlockWithoutTypes lang="tsx" className="text-[14px]">
      {code}
    </CodeBlockWithoutTypes>
  );
};
