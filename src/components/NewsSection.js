import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NewsSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imagesRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current.children, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      }
    });
    
    gsap.from(imagesRef.current.children, {
      x: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imagesRef.current,
        start: 'top 70%',
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="news-section section" ref={sectionRef}>
      <div className="container">
        <div className="news-content">
          <div className="news-text" ref={textRef}>
            <h2 className="section-title">NEWS</h2>
            <p>
              we bring confidence in every things you wear and make you feel like you are a super model
            </p>
            <button className="btn btn-outline">shop now</button>
          </div>
          <div className="news-images" ref={imagesRef}>
            <img 
              src="https://images.pexels.com/photos/6046226/pexels-photo-6046226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="News 1" 
              className="news-image"
            />
            <img 
              src="https://images.pexels.com/photos/6046183/pexels-photo-6046183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="News 2" 
              className="news-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;