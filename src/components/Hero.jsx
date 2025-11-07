import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center py-24">
          <div className="backdrop-blur-sm bg-white/50 dark:bg-neutral-900/40 rounded-2xl p-6 border border-white/40 dark:border-white/10">
            <p className="text-xs uppercase tracking-widest text-indigo-600 font-semibold">Frontend Developer</p>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Building delightful, modern web experiences
            </h1>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300">
              I craft interactive interfaces with React, TypeScript, and modern tooling. I care about performance, accessibility, and playful micro‑interactions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition">
                View Projects <ArrowRight size={16} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-300/60 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent" />
    </section>
  );
}
