import dynamic from 'next/dynamic';
import Nav from './components/Nav';
import Hero from './components/Hero';

// Below-fold components: code-split to reduce initial JS bundle
const About      = dynamic(() => import('./components/About'));
const Projects   = dynamic(() => import('./components/Projects'));
const Experience = dynamic(() => import('./components/Experience'));
const Contact    = dynamic(() => import('./components/Contact'));
const Footer     = dynamic(() => import('./components/Footer'));

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
