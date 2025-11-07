import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ParallaxSection from './components/ParallaxSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function SectionContainer({ children }) {
  return <div className="max-w-6xl mx-auto px-4 sm:px-6">{children}</div>;
}

function InfoCard({ title, desc, idx, progress }) {
  const y = useTransform(progress, [0, 1], [idx * 6, -idx * 6]);
  const glowOpacity = useTransform(progress, [0, 1], [0.25, 0.5]);
  return (
    <motion.div style={{ y }} className="relative group">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl bg-[conic-gradient(at_0%_0%,theme(colors.indigo.500),theme(colors.fuchsia.500),theme(colors.cyan.400),theme(colors.indigo.500))] blur-xl"
        style={{ opacity: glowOpacity }}
      />
      <div className="relative rounded-2xl p-5 border border-white/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function App() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  return (
    <div ref={ref} className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <SectionContainer>
          <div className="grid md:grid-cols-3 gap-6 -mt-10 relative z-20">
            <InfoCard
              idx={0}
              progress={scrollYProgress}
              title="What I do"
              desc="Interfaces, design systems, performance optimization, and delightful animations."
            />
            <InfoCard
              idx={1}
              progress={scrollYProgress}
              title="Tech"
              desc="React, TypeScript, Tailwind, Vite, Framer Motion, Spline, Node, and more."
            />
            <InfoCard
              idx={2}
              progress={scrollYProgress}
              title="Approach"
              desc="Accessible, responsive, and fast by default — shipped with craftsmanship."
            />
          </div>
        </SectionContainer>
        <ParallaxSection />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
