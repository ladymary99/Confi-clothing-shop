import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Footer.css';

const Footer = () => {
  const formRef = useRef(null);
  const linksRef = useRef(null);
  
  useEffect(() => {
    // Form animations
    gsap.from(formRef.current.querySelectorAll('*'), {
      duration: 0.8,
      y: 20,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: formRef.current,
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    });
    
    // Footer links animations
    gsap.from(linksRef.current.querySelectorAll('.footer-column'), {
      duration: 0.8,
      y: 30,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: linksRef.current,
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    });
    
    // Button animation
    const button = formRef.current.querySelector('button');
    
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
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="newsletter" ref={formRef}>
            <h3>Submit Your Email for news and black friday shopping</h3>
            <div className="newsletter-form">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Your email address" />
              </div>
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
          
          <div className="footer-links" ref={linksRef}>
            <div className="footer-column">
              <h4>links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Collections</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">About</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Follow us</h4>
              <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">contact@clothing.com</a></li>
                <li><a href="#">paris, france</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-logo">
            <div className="pixel-text">COMLI</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;