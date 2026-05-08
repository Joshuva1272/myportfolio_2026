import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const stat1Ref = useRef<HTMLHeadingElement>(null);
  const stat2Ref = useRef<HTMLHeadingElement>(null);
  const stat3Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const stats = [
      { ref: stat1Ref, endValue: 4, suffix: '+' },
      { ref: stat2Ref, endValue: 30, suffix: '%' },
      { ref: stat3Ref, endValue: 15, suffix: 'hr' }
    ];

    stats.forEach(stat => {
      const el = stat.ref.current;
      if (el) {
        gsap.fromTo(el,
          { innerHTML: 0 },
          {
            innerHTML: stat.endValue,
            duration: 2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none reverse"
            },
            snap: { innerHTML: 1 },
            onUpdate: function () {
              el.innerHTML = Math.round(Number(this.targets()[0].innerHTML)) + stat.suffix;
            }
          }
        );
      }
    });
  }, []);

  return (
    <section id="about" className="about">
      <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
      <div className="about-content glass-panel">
        <p>
          Results-driven <strong>Data Analyst</strong> with 4+ years of hands-on experience in business intelligence,
          predictive modelling, and data pipeline automation across fintech, FMCG, and non-profit sectors.
        </p>
        <p>
          Proven track record of translating complex datasets into strategic decisions — accelerated
          multi-site decision-making by 30% at UNICEF India and contributed to a forecasted 15% EV
          market share at Ayka Control Systems.
        </p>
        <p>
          Proficient in Python, SQL, Power BI, and Tableau, with a strong academic foundation including
          a PGDM from IIT Kanpur and an ongoing MSc in Data Science (University of Europe, Dubai).
          Adept at stakeholder communication, cross-functional collaboration, and building scalable,
          ATS-ready reporting systems for global organisations.
        </p>

        <div className="about-stats">
          <div className="stat-item">
            <h3 ref={stat1Ref}>0+</h3>
            <span>Years Experience</span>
          </div>
          <div className="stat-item">
            <h3 ref={stat2Ref}>0%</h3>
            <span>Decision Speed Improvement</span>
          </div>
          <div className="stat-item">
            <h3 ref={stat3Ref}>0hr</h3>
            <span>Saved Weekly via Automation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
