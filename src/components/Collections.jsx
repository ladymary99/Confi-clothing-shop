import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Collections.css';

const collections = [
  {
    id: 1,
    title: 'jeans',
    image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'shorts',
    image: 'https://images.pexels.com/photos/3907595/pexels-photo-3907595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'jackets',
    image: 'https://images.pexels.com/photos/2409681/pexels-photo-2409681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Collections = () => {
  const sectionRef = useRef(null);
  const collectionsRef = useRef([]);
  
  useEffect(() => {
    // Title animation
    gsap.from(sectionRef.current.querySelector('h2'), {
      duration: 0.8,
      y: 30,
      opacity: 0,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    });
    
    // Collection cards animation
    gsap.from(collectionsRef.current, {
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current.querySelector('.collections-grid'),
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
    
    // Hover animations
    collectionsRef.current.forEach(collection => {
      const image = collection.querySelector('img');
      const overlay = collection.querySelector('.collection-overlay');
      const title = collection.querySelector('h3');
      const arrow = collection.querySelector('svg');
      
      const tl = gsap.timeline({ paused: true });
      
      tl.to(image, {
        duration: 0.5,
        scale: 1.1,
        ease: 'power2.out'
      })
      .to(overlay, {
        duration: 0.4,
        opacity: 0.7,
        ease: 'power1.out'
      }, 0)
      .to(title, {
        duration: 0.4,
        y: -10,
        ease: 'power2.out'
      }, 0)
      .to(arrow, {
        duration: 0.3,
        x: 5,
        opacity: 1,
        ease: 'power1.out'
      }, 0.1);
      
      collection.addEventListener('mouseenter', () => {
        tl.play();
      });
      
      collection.addEventListener('mouseleave', () => {
        tl.reverse();
      });
    });
  }, []);
  
  return (
    <section className="collections-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Collections</h2>
        
        <div className="collections-grid">
          {collections.map((collection, index) => (
            <div 
              className="collection-card" 
              key={collection.id}
              ref={el => collectionsRef.current[index] = el}
            >
              <div className="collection-image">
                <img src={collection.image} alt={collection.title} />
                <div className="collection-overlay"></div>
              </div>
              <div className="collection-info">
                <h3>{collection.title}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;