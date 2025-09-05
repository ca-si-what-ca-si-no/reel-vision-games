import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxElementProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: "up" | "down";
}

const ParallaxElement = ({ 
  children, 
  speed = 0.5, 
  className = "",
  direction = "up"
}: ParallaxElementProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? [-100 * speed, 100 * speed] : [100 * speed, -100 * speed]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`absolute ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxElement;