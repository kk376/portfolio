import { memo, ReactNode } from "react";
import { motion } from "framer-motion";

export interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

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
