import { motion, useScroll, useTransform } from 'framer-motion';

function Card({ title, desc, idx, progress }) {
  const y = useTransform(progress, [0, 1], [idx * 8, -idx * 8]);
  const glowOpacity = useTransform(progress, [0, 1], [0.2, 0.5]);
  return (
    <motion.div style={{ y }} className="relative group">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl bg-[conic-gradient(at_0%_0%,theme(colors.indigo.500),theme(colors.fuchsia.500),theme(colors.cyan.400),theme(colors.indigo.500))] blur-xl"
        style={{ opacity: glowOpacity }}
      />
      <div className="relative rounded-2xl p-6 border border-white/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.06)] min-h-[180px]">
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function InfoCards() {
  const { scrollYProgress } = useScroll({ offset: ['start end', 'end start'] });
  return (
    <section className="relative -mt-10 z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-6">
          <Card idx={0} progress={scrollYProgress} title="What I do" desc="Interfaces, design systems, performance optimization, and delightful animations." />
          <Card idx={1} progress={scrollYProgress} title="Tech" desc="React, TypeScript, Tailwind, Vite, Framer Motion, Spline, Node, and more." />
          <Card idx={2} progress={scrollYProgress} title="Approach" desc="Accessible, responsive, and fast by default — shipped with craftsmanship." />
        </div>
      </div>
    </section>
  );
}
