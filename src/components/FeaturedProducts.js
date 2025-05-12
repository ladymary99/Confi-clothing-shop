import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { featuredProducts } from '../data/products';
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeaturedProducts = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const productsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
    
    tl.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out"
    });
    
    gsap.from(productsRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: productsRef.current,
        start: 'top 80%',
      }
    });

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <section className="featured-products section" ref={sectionRef}>
      <div className="container">
        <div className="section-title" ref={titleRef}>
          <span>Best Seller Products</span>
          <span className="arrow"><ArrowRight /></span>
        </div>
        <div className="products-grid" ref={productsRef}>
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;