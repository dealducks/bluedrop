"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { pageTransition } from "@/lib/animations";

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Wrapper component that provides smooth page transitions
 * Place this in your layout to enable transitions between pages
 */
export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={pageTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
