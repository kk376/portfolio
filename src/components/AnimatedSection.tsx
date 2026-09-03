import { memo, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

/**
 * AnimatedSection - Scroll-triggered section wrapper using Framer Motion.
 *
 * Supports prefers-reduced-motion:
 * - When reduced motion is requested, suppresses entrance transitions.
 * - Otherwise applies subtle 24px upward fade when scrolling into view.
 */
function AnimatedSection({ children, className = "" }: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default memo(AnimatedSection);
