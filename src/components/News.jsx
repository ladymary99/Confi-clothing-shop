import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './News.css';

const News = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);
  
  useEffect(() => {
    // Scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    });
    
    tl.from(textRef.current.querySelectorAll('*'), {
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.1
    })
    .from(imageRef.current, {
      duration: 1,
      x: 100,
      opacity: 0
    }, '-=0.4')
    .from(buttonRef.current, {
      duration: 0.6,
      y: 20,
      opacity: 0
    }, '-=0.6');
    
    // Button hover effect
    const button = buttonRef.current;
    
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        duration: 0.3,
        backgroundColor: '#333',
        ease: 'power1.out'
      });
    });
    
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        duration: 0.3,
        backgroundColor: '#000',
        ease: 'power1.out'
      });
    });
  }, []);
  
  return (
    <section className="news-section" ref={sectionRef}>
      <div className="container">
        <div className="news-content">
          <div className="news-text" ref={textRef}>
            <h2 className="section-title">NEWS</h2>
            <p>
              we bring confidence in<br />
              every things you wear and make<br />
              you feel like you are a super model
            </p>
            <button className="btn btn-primary" ref={buttonRef}>shop now</button>
          </div>
          
          <div className="news-image" ref={imageRef}>
            <img 
              src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Fashion news" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;