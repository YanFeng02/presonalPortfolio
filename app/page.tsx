import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-5 sm:px-6">
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
