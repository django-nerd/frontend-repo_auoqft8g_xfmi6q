export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 border-t border-neutral-200/70 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-neutral-600 dark:text-neutral-400">© {year} Your Name. All rights reserved.</p>
        <p className="text-neutral-600 dark:text-neutral-400">Built with React, Tailwind and a touch of Spline.</p>
      </div>
    </footer>
  );
}
