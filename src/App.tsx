import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import AnimatedBackground from './components/AnimatedBackground';
import Loader from './components/Loader';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      document.body.style.overflow = 'auto';
      // Global reveal animation for sections
      const sections = document.querySelectorAll('section:not(#home)');
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    } else {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    }
  }, [isLoaded]);

  return (
    <>
      {!isLoaded && <Loader onComplete={() => setIsLoaded(true)} />}
      <Cursor />
      <AnimatedBackground />
      <Navbar />
      <main style={{ visibility: isLoaded ? 'visible' : 'hidden' }}>
        <Hero isLoaded={isLoaded} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Contact />
    </>
  );
}

export default App;
