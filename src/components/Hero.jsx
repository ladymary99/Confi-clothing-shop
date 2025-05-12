import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ThreeScene from './ThreeScene';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);
  
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Text animation
    tl.from(textRef.current.querySelector('h1'), {
      duration: 1.2,
      opacity: 0,
      y: 50,
      ease: 'power3.out'
    })
    .from(textRef.current.querySelector('p'), {
      duration: 1,
      opacity: 0,
      y: 30,
      ease: 'power3.out'
    }, '-=0.8')
    .from(ctaRef.current, {
      duration: 0.8,
      opacity: 0,
      y: 20,
      ease: 'power2.out'
    }, '-=0.6');
    
    // Button hover animation
    const button = ctaRef.current.querySelector('button');
    
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        duration: 0.3,
        scale: 1.05,
        ease: 'power1.out'
      });
    });
    
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        duration: 0.3,
        scale: 1,
        ease: 'power1.out'
      });
    });
  }, []);
  
  return (
    <section className="hero" ref={heroRef}>
      <div className="container hero-container">
        <div className="hero-content" ref={textRef}>
          <h1>confidence</h1>
          <p>
            we bring confidence in<br />
            every things you wear<br />
            and make you feel like<br />
            you are a super model
          </p>
        </div>
        
        <div className="hero-cta" ref={ctaRef}>
          <button className="btn btn-primary">Shop now</button>
        </div>
        
        <div className="hero-model">
          <ThreeScene />
        </div>
      </div>
    </section>
  );
};

export default Hero;