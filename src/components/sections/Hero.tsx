import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { Download } from 'lucide-react';
import HeroAlpha from '../v2/HeroAlpha';
import './Hero.css';

interface HeroProps {
  isLoaded: boolean;
}

const Hero = ({ isLoaded }: HeroProps) => {
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoaded) {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.fromTo(btnsRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.6 });
    }
  }, [isLoaded]);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div ref={subtitleRef}>
          <HeroAlpha />
        </div>
        <div className="hero-btns" ref={btnsRef}>
          <a href="./resume/resume.pdf" target="_blank" className="btn" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            Resume <Download size={20} />
          </a>
          <div className="hero-social">
            <a href="https://github.com/Joshuva1272" target="_blank" aria-label="GitHub"><FaGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/joshuvajv1272/" target="_blank" aria-label="LinkedIn"><FaLinkedinIn size={24} /></a>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="glass-panel abstract-shape shape-1"></div>
        <div className="glass-panel abstract-shape shape-2"></div>
      </div>
    </section>
  );
};

export default Hero;
