"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, animate } from "framer-motion";

interface UseCountUpOptions {
  /**
   * Duration of the count animation in seconds
   * @default 2
   */
  duration?: number;
  /**
   * Delay before starting the animation in seconds
   * @default 0
   */
  delay?: number;
  /**
   * Only animate once when element enters viewport
   * @default true
   */
  once?: boolean;
  /**
   * Easing function for the animation
   * @default "easeOut"
   */
  ease?: "linear" | "easeIn" | "easeOut" | "easeInOut" | number[];
  /**
   * Number of decimal places to show
   * @default 0
   */
  decimals?: number;
  /**
   * Use spring physics for animation
   * @default false
   */
  useSpring?: boolean;
}

/**
 * Hook that animates a number from 0 to target value when element enters viewport
 *
 * @example
 * const { ref, value } = useCountUp(3500, { duration: 2.5 });
 * return <span ref={ref}>{Math.round(value)}</span>
 */
export function useCountUp(
  target: number,
  options: UseCountUpOptions = {}
) {
  const {
    duration = 2,
    delay = 0,
    once = true,
    ease = "easeOut",
    decimals = 0,
    useSpring: useSpringPhysics = false,
  } = options;

  const ref = useRef<HTMLElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [displayValue, setDisplayValue] = useState(0);
  const isInView = useInView(ref, { once, amount: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && (!once || !hasAnimated.current)) {
      hasAnimated.current = true;

      const timer = setTimeout(() => {
        const valueToAnimate = useSpringPhysics ? motionValue : motionValue;

        animate(valueToAnimate, target, {
          duration,
          ease,
          onUpdate: (latest) => {
            setDisplayValue(Number(latest.toFixed(decimals)));
          },
        });
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [isInView, target, duration, delay, ease, decimals, once, useSpringPhysics, motionValue]);

  return {
    ref,
    value: displayValue,
  };
}

/**
 * Hook that formats a counting number with suffix (K, M, B, etc.)
 *
 * @example
 * const { ref, formattedValue } = useCountUpFormatted(3500, { suffix: '+' });
 * return <span ref={ref}>{formattedValue}</span> // Shows: "3.5K+"
 */
export function useCountUpFormatted(
  target: number,
  options: UseCountUpOptions & {
    prefix?: string;
    suffix?: string;
    formatK?: boolean; // Format thousands as K
    formatM?: boolean; // Format millions as M
  } = {}
) {
  const {
    prefix = "",
    suffix = "",
    formatK = true,
    formatM = true,
    decimals = 1,
    ...countOptions
  } = options;

  const { ref, value } = useCountUp(target, { ...countOptions, decimals: 0 });

  const formattedValue = () => {
    let num = value;
    let unit = "";

    if (formatM && num >= 1000000) {
      num = num / 1000000;
      unit = "M";
    } else if (formatK && num >= 1000) {
      num = num / 1000;
      unit = "K";
    }

    const rounded = unit ? num.toFixed(decimals) : Math.round(num);
    return `${prefix}${rounded}${unit}${suffix}`;
  };

  return {
    ref,
    value,
    formattedValue: formattedValue(),
  };
}

/**
 * Hook for percentage animations with automatic % suffix
 *
 * @example
 * const { ref, percentage } = usePercentageCountUp(98);
 * return <span ref={ref}>{percentage}</span> // Shows: "98%"
 */
export function usePercentageCountUp(
  target: number,
  options: Omit<UseCountUpOptions, "decimals"> & { decimals?: number } = {}
) {
  const { decimals = 0, ...countOptions } = options;
  const { ref, value } = useCountUp(target, { ...countOptions, decimals });

  return {
    ref,
    value,
    percentage: `${value}%`,
  };
}

/**
 * Hook for multiple count-up animations that start in sequence
 *
 * @example
 * const counters = useMultipleCountUp([
 *   { target: 10, suffix: '+' },
 *   { target: 3500, suffix: '+' },
 *   { target: 98, suffix: '%' }
 * ]);
 *
 * return counters.map((counter, i) => (
 *   <span key={i} ref={counter.ref}>{counter.value}{counter.suffix}</span>
 * ))
 */
export function useMultipleCountUp(
  configs: Array<{
    target: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
  }>,
  options: Omit<UseCountUpOptions, "delay"> & {
    staggerDelay?: number;
  } = {}
) {
  const { staggerDelay = 0.2, ...baseOptions } = options;

  const counters = configs.map((config, index) => {
    const { ref, value } = useCountUp(config.target, {
      ...baseOptions,
      delay: index * staggerDelay,
      decimals: config.decimals ?? 0,
    });

    return {
      ref,
      value,
      displayValue: `${config.prefix || ""}${value}${config.suffix || ""}`,
    };
  });

  return counters;
}

/**
 * Hook for currency formatting with count-up animation
 *
 * @example
 * const { ref, currency } = useCurrencyCountUp(1500, { currency: 'USD' });
 * return <span ref={ref}>{currency}</span> // Shows: "$1,500"
 */
export function useCurrencyCountUp(
  target: number,
  options: UseCountUpOptions & {
    currency?: string;
    locale?: string;
  } = {}
) {
  const {
    currency = "USD",
    locale = "en-US",
    decimals = 0,
    ...countOptions
  } = options;

  const { ref, value } = useCountUp(target, { ...countOptions, decimals });

  const formattedCurrency = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);

  return {
    ref,
    value,
    currency: formattedCurrency,
  };
}
