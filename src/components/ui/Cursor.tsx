import { useEffect, useRef } from 'react';
import './Cursor.css';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current!;
    const follower = followerRef.current!;
    
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Immediate response for inner dot
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: 'power2.out'
      });
      
      // Slightly delayed response for outer circle
      gsap.to(follower, {
        x: mouseX,
        y: mouseY,
        duration: 0.5,
        ease: 'power3.out'
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    
    // Add magnetic hover effect to buttons and links
    const interactiveElements = document.querySelectorAll('a, button, .timeline-content, .project-card, .skill-card');
    
    const onMouseEnter = () => {
      gsap.to(follower, { scale: 2.5, backgroundColor: 'rgba(0, 240, 255, 0.1)', borderColor: 'rgba(0, 240, 255, 0.5)', duration: 0.3 });
      gsap.to(cursor, { scale: 0, duration: 0.3 });
    };
    
    const onMouseLeave = () => {
      gsap.to(follower, { scale: 1, backgroundColor: 'transparent', borderColor: 'rgba(255, 255, 255, 0.3)', duration: 0.3 });
      gsap.to(cursor, { scale: 1, duration: 0.3 });
    };

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursorRef}></div>
      <div className="custom-cursor-follower" ref={followerRef}></div>
    </>
  );
};

export default Cursor;
