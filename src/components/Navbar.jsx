import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const smoothTo = (id) => (e) => {
    if (!id.startsWith('#')) return;
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-white/60 dark:bg-neutral-900/60 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" onClick={smoothTo('#home')} className="font-semibold tracking-tight text-neutral-900 dark:text-white">
          <span className="text-indigo-600">&lt;/&gt;</span> dev.portfolio
        </a>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#projects" onClick={smoothTo('#projects')} className="hover:text-indigo-600 transition-colors">Projects</a>
          <a href="#contact" onClick={smoothTo('#contact')} className="hover:text-indigo-600 transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="#contact"
            onClick={smoothTo('#contact')}
            className="hidden sm:inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 transition"
          >
            <Mail size={16} /> Hire me
          </a>
        </div>
      </nav>
    </header>
  );
}
