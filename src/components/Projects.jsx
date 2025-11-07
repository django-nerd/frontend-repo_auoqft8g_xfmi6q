import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, Github } from 'lucide-react';

const demoProjects = [
  {
    title: 'Interactive Dashboard',
    desc: 'Analytics dashboard with charts, theming, and responsive layouts.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    live: '#',
    source: '#',
  },
  {
    title: 'Design System',
    desc: 'Reusable component library with tokens and dark mode support.',
    tech: ['Storybook', 'Radix', 'Tailwind'],
    live: '#',
    source: '#',
  },
  {
    title: '3D Playground',
    desc: 'Playful 3D interactions using Spline and Three.js integrations.',
    tech: ['Spline', 'Three.js', 'React'],
    live: '#',
    source: '#',
  },
];

function Badge({ children }) {
  return (
    <span className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
      {children}
    </span>
  );
}

function GlowCard({ children }) {
  return (
    <div className="relative group">
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[conic-gradient(at_10%_10%,theme(colors.indigo.500),theme(colors.fuchsia.500),theme(colors.cyan.400),theme(colors.indigo.500))] opacity-40 blur-xl transition duration-500 group-hover:opacity-60" />
      <div className="relative rounded-2xl border border-white/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
        {children}
      </div>
    </div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState(demoProjects);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const yOffsets = [
    useTransform(scrollYProgress, [0, 1], [0, -20]),
    useTransform(scrollYProgress, [0, 1], [10, -10]),
    useTransform(scrollYProgress, [0, 1], [20, 0]),
  ];
  const opac = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  useEffect(() => {
    // Placeholder for future backend integration
  }, []);

  return (
    <section id="projects" ref={ref} className="py-20 relative">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-neutral-50 dark:from-neutral-900 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Selected Work</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">A few recent projects that showcase my approach to UI engineering.</p>
          </div>
        </div>

        <motion.div style={{ opacity: opac }} className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article key={idx} style={{ y: yOffsets[idx % yOffsets.length] }} className="group">
              <GlowCard>
                <div className="aspect-video overflow-hidden rounded-t-2xl bg-gradient-to-br from-indigo-100 via-white to-pink-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800" />
                <div className="p-5">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <a href={p.live} className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:underline"><Globe size={16}/> Live</a>
                    <a href={p.source} className="inline-flex items-center gap-1 text-sm text-neutral-700 dark:text-neutral-300 hover:underline"><Github size={16}/> Code</a>
                  </div>
                </div>
              </GlowCard>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
