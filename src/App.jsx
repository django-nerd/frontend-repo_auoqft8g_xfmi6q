import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoCards from './components/InfoCards';
import ParallaxSection from './components/ParallaxSection';
import RightFeature from './components/RightFeature';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <InfoCards />
        <ParallaxSection />
        <RightFeature />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
