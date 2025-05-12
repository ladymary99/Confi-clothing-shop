import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Navbar.css';

const Navbar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  
  useEffect(() => {
    // Logo animation
    gsap.from(logoRef.current, {
      duration: 1,
      opacity: 0,
      scale: 0.8,
      ease: 'power3.out'
    });
    
    // Nav links hover animation
    const navLinks = navRef.current.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          duration: 0.3,
          y: -3,
          ease: 'power1.out'
        });
      });
      
      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          duration: 0.3,
          y: 0,
          ease: 'power1.out'
        });
      });
    });
    
    // Navbar scroll effect
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current.classList.add('navbar-scrolled');
      } else {
        navRef.current.classList.remove('navbar-scrolled');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className="navbar" ref={navRef}>
      <div className="container navbar-container">
        <div className="navbar-left">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Collections</a>
          <a href="#" className="nav-link">Blog</a>
        </div>
        
        <div className="navbar-logo" ref={logoRef}>
          <a href="/">
            <div className="pixel-text">COMLI</div>
          </a>
        </div>
        
        <div className="navbar-right">
          <a href="#" className="nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </a>
          <a href="#" className="nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </a>
          <a href="#" className="nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;