import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Zap, Rocket, Circle } from "lucide-react";
import { useRef } from "react";

const ParallaxBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Разные скорости для разных слоев
  const y1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const y4 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Слой 1 - Медленный */}
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent/40 rounded-full" />
        <div className="absolute bottom-60 left-1/4 w-1.5 h-1.5 bg-secondary/35 rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary-glow/25 rounded-full" />
      </motion.div>

      {/* Слой 2 - Средний */}
      <motion.div style={{ y: y2 }} className="absolute inset-0">
        <div className="absolute top-32 left-1/3">
          <Star className="w-4 h-4 text-accent/50" />
        </div>
        <div className="absolute bottom-40 right-1/4">
          <Zap className="w-5 h-5 text-primary/40" />
        </div>
        <div className="absolute top-2/3 left-16">
          <Circle className="w-3 h-3 text-secondary/45" />
        </div>
      </motion.div>

      {/* Слой 3 - Быстрый */}
      <motion.div style={{ y: y3 }} className="absolute inset-0">
        <div className="absolute top-1/4 right-10">
          <Rocket className="w-6 h-6 text-primary-glow/60" />
        </div>
        <div className="absolute bottom-1/3 left-1/2">
          <Star className="w-5 h-5 text-accent/55" />
        </div>
      </motion.div>

      {/* Слой 4 - Обратное направление */}
      <motion.div style={{ y: y4 }} className="absolute inset-0">
        <div className="absolute top-1/2 left-20 w-96 h-96 bg-gradient-to-r from-primary/5 via-primary-glow/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-l from-accent/8 via-accent/4 to-transparent rounded-full blur-3xl" />
      </motion.div>

      {/* Фоновые геометрические формы */}
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-primary/10 rounded-full" />
        <div className="absolute bottom-1/2 right-1/5 w-24 h-24 border border-accent/15 rotate-45" />
      </motion.div>
    </div>
  );
};

export default ParallaxBackground;