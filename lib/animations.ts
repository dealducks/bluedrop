import { Variants } from "framer-motion";

// Animation durations (in seconds)
export const DURATIONS = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.3,
  slower: 0.4,
};

// Spring configurations
export const SPRING = {
  gentle: { type: "spring" as const, stiffness: 100, damping: 15 },
  bouncy: { type: "spring" as const, stiffness: 300, damping: 20 },
  snappy: { type: "spring" as const, stiffness: 400, damping: 30 },
};

// ============================================
// FADE ANIMATIONS
// ============================================

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATIONS.normal },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.slow, ease: "easeOut" },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.slow, ease: "easeOut" },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATIONS.slow, ease: "easeOut" },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATIONS.slow, ease: "easeOut" },
  },
};

// ============================================
// SCALE ANIMATIONS
// ============================================

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATIONS.slow, ease: [0.16, 1, 0.3, 1] },
  },
};

export const scaleInBounce: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: SPRING.bouncy,
  },
};

export const scaleInRotate: Variants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: DURATIONS.slower, ease: "easeOut" },
  },
};

// ============================================
// SLIDE ANIMATIONS
// ============================================

export const slideInLeft: Variants = {
  hidden: { x: "-100%" },
  visible: {
    x: 0,
    transition: { duration: DURATIONS.slow, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    x: "-100%",
    transition: { duration: DURATIONS.normal, ease: "easeIn" },
  },
};

export const slideInRight: Variants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { duration: DURATIONS.slow, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    x: "100%",
    transition: { duration: DURATIONS.normal, ease: "easeIn" },
  },
};

export const slideInUp: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: { duration: DURATIONS.slow, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    y: "100%",
    transition: { duration: DURATIONS.normal, ease: "easeIn" },
  },
};

export const slideInDown: Variants = {
  hidden: { y: "-100%" },
  visible: {
    y: 0,
    transition: { duration: DURATIONS.slow, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    y: "-100%",
    transition: { duration: DURATIONS.normal, ease: "easeIn" },
  },
};

// ============================================
// STAGGER ANIMATIONS
// ============================================

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};

export const staggerFastContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0,
    },
  },
};

export const staggerSlowContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.normal },
  },
};

// ============================================
// SPECIAL EFFECTS
// ============================================

export const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const glowAnimation = {
  boxShadow: [
    "0 0 20px rgba(59, 130, 246, 0.5)",
    "0 0 40px rgba(59, 130, 246, 0.8)",
    "0 0 20px rgba(59, 130, 246, 0.5)",
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// ============================================
// PAGE TRANSITIONS
// ============================================

export const pageTransition: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATIONS.slow, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: DURATIONS.normal, ease: "easeIn" },
  },
};

export const pageSlideTransition: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATIONS.slow, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: { duration: DURATIONS.normal, ease: "easeIn" },
  },
};

// ============================================
// HOVER ANIMATIONS (for whileHover prop)
// ============================================

export const hoverScale = {
  scale: 1.05,
  transition: { duration: DURATIONS.fast },
};

export const hoverLift = {
  y: -8,
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
  transition: { duration: DURATIONS.fast },
};

export const hoverTilt = {
  rotateY: 5,
  rotateX: 5,
  scale: 1.02,
  transition: { duration: DURATIONS.fast },
};

// ============================================
// TAP ANIMATIONS (for whileTap prop)
// ============================================

export const tapScale = {
  scale: 0.95,
  transition: { duration: 0.1 },
};

export const tapShrink = {
  scale: 0.9,
  transition: { duration: 0.1 },
};

// ============================================
// MODAL/DIALOG ANIMATIONS
// ============================================

export const modalBackdrop: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATIONS.fast },
  },
  exit: {
    opacity: 0,
    transition: { duration: DURATIONS.fast },
  },
};

export const modalContent: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: SPRING.bouncy,
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    transition: { duration: DURATIONS.normal },
  },
};

// ============================================
// WORD/CHARACTER ANIMATIONS
// ============================================

export const wordContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0,
    },
  },
};

export const wordItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Creates a stagger container with custom delay
 */
export const createStaggerContainer = (
  staggerDelay: number = 0.1,
  delayChildren: number = 0.1
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

/**
 * Checks if user prefers reduced motion
 */
export const shouldReduceMotion = (): boolean => {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Returns animation variants based on user's motion preference
 */
export const getAnimationVariants = (variants: Variants): Variants => {
  if (shouldReduceMotion()) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.1 } },
    };
  }
  return variants;
};
