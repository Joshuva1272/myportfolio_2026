import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Cursor from './components/ui/Cursor';
import AnimatedBackground from './components/layout/AnimatedBackground';
import Loader from './components/ui/Loader';
import ProjectDetail from './pages/ProjectDetail';

gsap.registerPlugin(ScrollTrigger);

const Home = ({ isLoaded }: { isLoaded: boolean }) => (
  <main style={{ visibility: isLoaded ? 'visible' : 'hidden' }}>
    <Hero isLoaded={isLoaded} />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Education />
  </main>
);

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (isLoaded && location.pathname === '/') {
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
    } else if (!isLoaded) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    }
  }, [isLoaded, location.pathname]);

  return (
    <>
      {!isLoaded && <Loader onComplete={() => setIsLoaded(true)} />}
      <Cursor />
      <AnimatedBackground />
      <Navbar />
      
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #00f0ff, #fff)',
          transformOrigin: '0%',
          zIndex: 9999,
          boxShadow: '0 0 10px #00f0ff'
        }}
      />
      
      <Routes>
        <Route path="/" element={<Home isLoaded={isLoaded} />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      
      <Contact />
    </>
  );
}

export default App;
