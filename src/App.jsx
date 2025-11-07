import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function SectionContainer({ children }) {
  return <div className="max-w-6xl mx-auto px-4 sm:px-6">{children}</div>;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <SectionContainer>
          <div className="grid md:grid-cols-3 gap-6 -mt-10 relative z-20">
            <div className="rounded-2xl p-5 border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
              <h3 className="font-semibold">What I do</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Interfaces, design systems, performance optimization, and delightful animations.</p>
            </div>
            <div className="rounded-2xl p-5 border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
              <h3 className="font-semibold">Tech</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">React, TypeScript, Tailwind, Vite, Framer Motion, Spline, Node, and more.</p>
            </div>
            <div className="rounded-2xl p-5 border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
              <h3 className="font-semibold">Approach</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Accessible, responsive, and fast by default — shipped with craftsmanship.</p>
            </div>
          </div>
        </SectionContainer>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
