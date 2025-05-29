"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface WavyRadioTextProps {
  text: string;
  keyIndex: number; // change this on slideIndex change
}

export const WavyText = ({ text, keyIndex }: WavyRadioTextProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={keyIndex}
        className="flex flex-wrap gap-[1px] overflow-hidden"
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{
              y: 10, // small wave
              opacity: 0,
              filter: "blur(4px)",
              scale: 0.95,
            }}
            animate={{
              y: [10, -4, 0], // gentle sine curve motion
              opacity: 1,
              filter: "blur(0px)",
              scale: 1,
            }}
            transition={{
              delay: i * 0.045, // tight ripple delay
              duration: 0.2,
              ease: [0.4, 0.0, 0.2, 1], // smoother ease
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
