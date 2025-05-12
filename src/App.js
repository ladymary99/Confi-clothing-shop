import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import NewsSection from './components/NewsSection';
import Collections from './components/Collections';
import Footer from './components/Footer';
import Cart from './components/Cart';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
      gsap.from(section, {
        opacity: 0.8,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true
        }
      });
    });

    // Clean up on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <CartProvider>
      <div className="app">
        <Header />
        <Hero />
        <FeaturedProducts />
        <NewsSection />
        <Collections />
        <Footer />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;