"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface UseScrollAnimationOptions {
  /**
   * Only trigger animation once when element enters viewport
   * @default true
   */
  once?: boolean;
  /**
   * Amount of element that must be visible before triggering (0 to 1)
   * @default 0.1
   */
  amount?: number;
  /**
   * Margin around the viewport for early/late triggering
   * @default "0px"
   */
  margin?: string;
}

/**
 * Hook that returns whether an element is in view
 * Useful for triggering scroll-based animations
 *
 * @example
 * const ref = useScrollAnimation();
 * return <motion.div ref={ref} initial="hidden" whileInView="visible" variants={fadeInUp} />
 */
export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { once = true, amount = 0.1, margin = "0px" } = options;
  const ref = useRef<HTMLElement>(null);

  const isInView = useInView(ref, {
    once,
    amount,
    margin,
  });

  return ref;
}

/**
 * Hook that returns both ref and inView state
 * Useful when you need to conditionally render based on visibility
 *
 * @example
 * const { ref, isInView } = useScrollAnimationState();
 * return <motion.div ref={ref} animate={isInView ? "visible" : "hidden"} variants={fadeInUp} />
 */
export function useScrollAnimationState(options: UseScrollAnimationOptions = {}) {
  const { once = true, amount = 0.1, margin = "0px" } = options;
  const ref = useRef<HTMLElement>(null);

  const isInView = useInView(ref, {
    once,
    amount,
    margin,
  });

  return { ref, isInView };
}

/**
 * Hook for progressive reveal animations with multiple refs
 * Returns array of refs that can be assigned to multiple elements
 *
 * @example
 * const refs = useScrollAnimationMultiple(3);
 * return (
 *   <>
 *     <motion.div ref={refs[0]} variants={fadeIn} />
 *     <motion.div ref={refs[1]} variants={fadeIn} />
 *     <motion.div ref={refs[2]} variants={fadeIn} />
 *   </>
 * )
 */
export function useScrollAnimationMultiple(
  count: number,
  options: UseScrollAnimationOptions = {}
) {
  const { once = true, amount = 0.1, margin = "0px" } = options;

  const refs = useRef<(HTMLElement | null)[]>(
    Array(count).fill(null)
  );
  const [inViewStates, setInViewStates] = useState<boolean[]>(
    Array(count).fill(false)
  );

  useEffect(() => {
    const observers = refs.current.map((element, index) => {
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInViewStates((prev) => {
              const newStates = [...prev];
              newStates[index] = true;
              return newStates;
            });
            if (once) {
              observer.disconnect();
            }
          } else if (!once) {
            setInViewStates((prev) => {
              const newStates = [...prev];
              newStates[index] = false;
              return newStates;
            });
          }
        },
        {
          threshold: amount,
          rootMargin: margin,
        }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [once, amount, margin]);

  return {
    refs,
    inViewStates,
    setRef: (index: number) => (el: HTMLElement | null) => {
      refs.current[index] = el;
    },
  };
}

/**
 * Hook for staggered scroll animations
 * Triggers animations sequentially as elements enter viewport
 *
 * @example
 * const { containerRef, itemRefs } = useStaggerScrollAnimation(5);
 * return (
 *   <div ref={containerRef}>
 *     {items.map((item, i) => (
 *       <motion.div key={i} ref={itemRefs[i]} variants={staggerItem} />
 *     ))}
 *   </div>
 * )
 */
export function useStaggerScrollAnimation(itemCount: number) {
  const containerRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>(
    Array(itemCount).fill(null)
  );

  return {
    containerRef,
    itemRefs,
    setItemRef: (index: number) => (el: HTMLElement | null) => {
      itemRefs.current[index] = el;
    },
  };
}
