"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export const RouterNavigation = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center w-fit gap-2">
      <button onClick={() => router.back()} className="classic_button text-black flex-shrink-0">
          <ArrowLeft size={20} />
      </button>
      <button
        onClick={() => router.forward()}
        className="classic_button text-black flex-shrink-0"
      >
        <ArrowRight size={20} />
      </button>
    </div>
  );
};
