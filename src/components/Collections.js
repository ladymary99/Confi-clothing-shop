import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { collections } from '../data/products';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Collections = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });
    
    gsap.from(cardsRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 80%',
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="collections" className="collections-section section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title" ref={titleRef}>Collections</h2>
        <div className="collections-grid" ref={cardsRef}>
          {collections.map(collection => (
            <div key={collection.id} className="collection-card">
              <img src={collection.image} alt={collection.name} className="collection-image" />
              <h3 className="collection-name">{collection.name}</h3>
              <a href={`#${collection.id}`} className="collection-link">
                <ArrowUpRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;