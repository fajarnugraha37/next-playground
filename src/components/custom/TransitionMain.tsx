"use client";
import { motion } from "framer-motion";

interface TransitionProps {
  children: React.ReactNode;
  className?: string | undefined;
}

export function TransitionMain({ children, className }: TransitionProps) {
  return (
    <motion.main
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 1.5,
      }}
      className={className}
    >
      {children}
    </motion.main>
  );
}

export function TransitionDiv({ children, className }: TransitionProps) {
  return (
    <motion.main
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 1.5,
      }}
      className={className}
    >
      {children}
    </motion.main>
  );
}
