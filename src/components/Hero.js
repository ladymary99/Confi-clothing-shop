import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    .from(subtitleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4")
    .from(buttonRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.4")
    .from(imageRef.current, {
      scale: 1.1,
      opacity: 0.8,
      duration: 1,
      ease: "power2.out"
    }, "-=0.8");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <div className="hero-content">
          <h1 className="hero-title" ref={titleRef}>confidence</h1>
          <p className="hero-subtitle" ref={subtitleRef}>
            we bring confidence in every things you wear and make you feel like you are a super model
          </p>
          <button className="btn" ref={buttonRef}>Shop now</button>
        </div>
        <div className="hero-image" ref={imageRef}>
          <img src="https://images.pexels.com/photos/6348803/pexels-photo-6348803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;