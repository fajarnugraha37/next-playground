"use client";
import { motion } from "framer-motion";

interface TransitionProps {
  children: React.ReactNode;
  className?: string | undefined;
}

export function TransitionBody({ children, className }: TransitionProps) {
  return (
    <motion.body
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: .75,
      }}
      className={className}
    >
      {children}
    </motion.body>
  );
}

export function TransitionMain({ children, className }: TransitionProps) {
  return (
    <motion.main
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: .75,
      }}
      className={className}
    >
      {children}
    </motion.main>
  );
}

export function TransitionDiv({ children, className }: TransitionProps) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: .75,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
