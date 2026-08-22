import { memo, ReactNode } from "react";
import { motion } from "framer-motion";

export interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

/**
 * AnimatedSection - Scroll-triggered section wrapper using Framer Motion.
 *
 * Viewport configuration:
 * - `once: true`: Prevents continuous unmount/remount animation churn as users scroll up and down.
 * - `margin: "-80px"`: Offsets the intersection trigger point by 80px above the bottom viewport edge,
 *   preventing sudden layout pops before the section is genuinely visible in the viewing area.
 */
function AnimatedSection({ children, className = "" }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default memo(AnimatedSection);
