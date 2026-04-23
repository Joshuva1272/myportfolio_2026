import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { MdDownload } from 'react-icons/md';
import './Hero.css';

interface HeroProps {
  isLoaded: boolean;
}

const Hero = ({ isLoaded }: HeroProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoaded) {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.2 })
        .fromTo(subtitleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
        .fromTo(pRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
        .fromTo(btnsRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6');
    }
  }, [isLoaded]);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h2 ref={titleRef}>Joshuva Jeemon</h2>
        <h1 ref={subtitleRef} className="gradient-text">Data Analyst & BI Specialist</h1>
        <p ref={pRef}>
          Turning complex datasets into strategic decisions. Specializing in predictive modelling, 
          data pipeline automation, and business intelligence to drive actionable insights.
        </p>
        <div className="hero-btns" ref={btnsRef}>
          <a href="./resume/resume.pdf" target="_blank" className="btn">
            Resume <MdDownload />
          </a>
          <div className="hero-social">
            <a href="https://github.com/Joshuva1272" target="_blank" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/joshuvajv1272/" target="_blank" aria-label="LinkedIn"><FaLinkedinIn /></a>
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
