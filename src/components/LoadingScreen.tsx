import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const words = ["Design", "Create", "Inspire"];

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);

  const animate = useCallback(
    (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(Math.floor((elapsed / 2700) * 100), 100);
      setCount(progress);
      if (progress < 100) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setTimeout(onComplete, 400);
      }
    },
    [onComplete]
  );

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % words.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-8 md:p-12">
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-xs text-muted uppercase tracking-[0.3em]"
      >
        Portfolio
      </motion.p>

      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80"
          >
            {words[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="flex flex-col items-end gap-4">
        <span className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums">
          {String(count).padStart(3, "0")}
        </span>
        <div className="w-full h-[3px] bg-stroke/50 rounded-full overflow-hidden">
          <div
            className="h-full accent-gradient origin-left transition-transform duration-100"
            style={{
              transform: `scaleX(${count / 100})`,
              boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
