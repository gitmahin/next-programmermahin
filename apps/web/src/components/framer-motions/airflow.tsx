"use client";
import { motion, AnimatePresence } from "framer-motion";

interface AirFlowTextProps {
  children: string | React.ReactNode;
  keyIndex?: number;
  className?: string;
  initialY?: number
  animateY?: number;
  exitY?: number;
  duration?: number
}

export const AirFlowText = ({ children, keyIndex, className, initialY, animateY, exitY, duration }: AirFlowTextProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={keyIndex} // important to re-trigger animation on slideIndex change
        initial={{ opacity: 0, y: initialY ?? -20, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: animateY ?? 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: exitY ?? 10, filter: "blur(4px)" }}
        transition={{ duration: duration ?? 0.8, ease: "easeOut" }}
        className="text-read_16 text-text-color_2 mt-1"
      >
        <span className={`${className}`}>
        {children}
        </span>
      </motion.div>
    </AnimatePresence>
  );
};
