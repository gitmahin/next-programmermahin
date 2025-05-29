"use client";
import { motion, AnimatePresence } from "framer-motion";

interface RadioWaveTextProps {
  text: string;
  keyIndex?: number;
  className?: string;
  duration?: number;
}

export const RadioWaveText = ({
  text,
  keyIndex,
  className,
  duration,
}: RadioWaveTextProps) => {
  return (
    <div className="overflow-hidden ">
      <AnimatePresence mode="wait">
        <motion.div
          key={keyIndex}
          initial="hidden"
          animate="visible"
          className={`inline-flex flex-wrap gap-[0px] ${className || ""} break-words whitespace-pre-wrap`}
        >
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(4px)" },
                visible: (i: number) => ({
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                  transition: {
                    delay: i * 0.03,
                    duration: duration ?? 0.3,
                    ease: "easeOut",
                  },
                }),
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
