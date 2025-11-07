import { motion, useScroll, useSpring } from 'framer-motion';

const items = [
  {
    role: 'Senior Frontend Engineer',
    org: 'Nebula Labs',
    period: '2023 — Present',
    points: [
      'Led a design system revamp with accessibility baked in.',
      'Shipped motion-first interfaces powered by Framer Motion.',
    ],
  },
  {
    role: 'Frontend Developer',
    org: 'PixelForge',
    period: '2021 — 2023',
    points: [
      'Built high-performance dashboards with React + Vite.',
      'Introduced Spline/3D micro-interactions for hero sections.',
    ],
  },
  {
    role: 'UI Engineer',
    org: 'Studio Orbit',
    period: '2019 — 2021',
    points: [
      'Collaborated with designers to prototype interactive flows.',
      'Optimized LCP/CLS for multiple marketing sites.',
    ],
  },
];

function Dot() {
  return (
    <span className="relative z-10 flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-50" />
      <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500" />
    </span>
  );
}

export default function Timeline() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.2 });

  return (
    <section id="timeline" className="py-24 relative">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-neutral-50 dark:from-neutral-900 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Work History</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">A quick timeline of roles and impact.</p>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-[1fr_auto] gap-8">
          <div className="space-y-10">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="relative"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1"><Dot /></div>
                  <div className="rounded-2xl border border-white/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-5 w-full">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold">{item.role}</h3>
                      <span className="text-neutral-500">@</span>
                      <span className="text-indigo-500 font-medium">{item.org}</span>
                    </div>
                    <p className="text-xs mt-1 text-neutral-500">{item.period}</p>
                    <ul className="list-disc pl-5 mt-3 space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                      {item.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative hidden md:block">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            <motion.div style={{ scaleY: progress }} className="origin-top absolute left-1/2 -translate-x-1/2 top-0 w-1 rounded-full bg-indigo-500/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
