import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Loader.css';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out and remove the loader from DOM
        gsap.to(loaderRef.current, {
          y: '-100%',
          duration: 0.8,
          ease: 'power4.inOut',
          onComplete: onComplete
        });
      }
    });

    // Animate the loading text percentage
    tl.to(textRef.current, {
      innerHTML: '100',
      duration: 1.5,
      snap: { innerHTML: 1 },
      ease: 'power2.out',
      onUpdate: function() {
        if (textRef.current) {
          textRef.current.innerHTML = Math.round(Number(this.targets()[0].innerHTML)) + '%';
        }
      }
    }, 0);

    // Animate the loading bar width
    tl.to(progressRef.current, {
      width: '100%',
      duration: 1.5,
      ease: 'power2.out'
    }, 0);

  }, [onComplete]);

  return (
    <div className="loader-container" ref={loaderRef}>
      <div className="loader-content">
        <h2 className="loader-title">INITIALIZING <span className="gradient-text">SYSTEM</span></h2>
        <h1 className="loader-percentage" ref={textRef}>0%</h1>
        <div className="loader-bar-container">
          <div className="loader-bar" ref={progressRef}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
