import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const y1 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <motion.div
        className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-indigo-500/20 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-fuchsia-500/20 blur-3xl"
        style={{ y: y2 }}
      />

      <motion.div style={{ opacity }} className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl p-8 md:p-12 border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-white/70 to-white/30 dark:from-neutral-900/70 dark:to-neutral-900/30 backdrop-blur">
          <h2 className="text-2xl md:text-3xl font-bold">Crafting experiences with motion</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Subtle parallax and micro-interactions guide attention and make interfaces feel alive — without sacrificing performance or accessibility.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
