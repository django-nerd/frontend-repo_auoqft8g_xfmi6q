import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function RightFeature() {
  const { scrollYProgress } = useScroll({ offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <motion.div style={{ opacity }} className="rounded-3xl p-8 border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-white/70 to-white/30 dark:from-neutral-900/70 dark:to-neutral-900/30 backdrop-blur">
            <h3 className="text-2xl font-bold">Crafting experiences with motion</h3>
            <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-prose">
              Subtle parallax and micro-interactions guide attention and make interfaces feel alive — without sacrificing performance or accessibility.
            </p>
          </motion.div>

          <motion.div style={{ y }} className="relative rounded-3xl overflow-hidden min-h-[320px] border border-white/10 dark:border-white/10 bg-black/20">
            <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_400px_at_120%_-10%,rgba(79,70,229,0.15),transparent_60%),radial-gradient(800px_300px_at_-10%_120%,rgba(236,72,153,0.12),transparent_60%)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
