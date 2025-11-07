import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const smoothTo = (id) => (e) => {
    if (!id.startsWith('#')) return;
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" ref={ref} className="relative min-h-[100vh] pt-24 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      <motion.div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6" style={{ y: contentY }}>
        <div className="grid md:grid-cols-2 gap-10 items-center py-24">
          <div className="backdrop-blur-sm bg-white/50 dark:bg-neutral-900/40 rounded-2xl p-6 border border-white/40 dark:border-white/10">
            <p className="text-xs uppercase tracking-widest text-indigo-500 font-semibold">Frontend Developer</p>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Futuristic, fast, and playful web experiences
            </h1>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300">
              I design and build interactive UIs with React, TypeScript, and motion. Performance, accessibility, and creative polish are always in focus.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" onClick={smoothTo('#projects')} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition">
                View Projects <ArrowRight size={16} />
              </a>
              <a href="#contact" onClick={smoothTo('#contact')} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-300/60 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent" />
    </section>
  );
}
