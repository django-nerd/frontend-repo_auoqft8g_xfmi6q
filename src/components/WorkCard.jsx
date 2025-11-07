import { motion } from 'framer-motion';

export default function WorkCard({ title, subtitle, body, right = null }) {
  return (
    <div className="relative group">
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[conic-gradient(at_10%_10%,theme(colors.indigo.500),theme(colors.fuchsia.500),theme(colors.cyan.400),theme(colors.indigo.500))] opacity-30 blur-xl transition duration-500 group-hover:opacity-50" />
      <div className="relative rounded-3xl border border-white/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
        <div className="grid md:grid-cols-2 gap-6 p-6 items-center min-h-[260px]">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            {subtitle && <p className="mt-1 text-sm text-neutral-500">{subtitle}</p>}
            <p className="mt-3 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">{body}</p>
          </div>
          <div className="relative min-h-[220px] rounded-2xl overflow-hidden border border-white/5">
            {right}
          </div>
        </div>
      </div>
    </div>
  );
}
