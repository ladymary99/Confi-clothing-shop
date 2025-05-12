import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import News from './components/News';
import Collections from './components/Collections';
import Footer from './components/Footer';
import './App.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize animations
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      gsap.fromTo(
        section, 
        { 
          opacity: 0, 
          y: 50 
        }, 
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    return () => {
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <News />
        <Collections />
      </main>
      <Footer />
    </div>
  );
}

export default App;