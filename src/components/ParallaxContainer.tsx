import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxContainerProps {
  children: ReactNode;
  className?: string;
}

const ParallaxContainer = ({ children, className = "" }: ParallaxContainerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={ref} className={`relative ${className}`}>
      {children}
    </div>
  );
};

export default ParallaxContainer;