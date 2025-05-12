import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#collections">Collections</a></li>
              <li><a href="#contact">Contact us</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Follow us</h3>
            <ul className="footer-links">
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#linkedin">LinkedIn</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contact</h3>
            <ul className="footer-links">
              <li><a href="#privacy">Privacy policy</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="mailto:info@cowliclothing.com">info@cowliclothing.com</a></li>
              <li>paris, france</li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Submit Your Email for news and black friday shopping</h3>
            <form className="newsletter-form">
              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                id="email" 
                className="newsletter-input" 
                placeholder="your@email.com" 
              />
              <button type="submit" className="btn">Submit</button>
            </form>
          </div>
        </div>
        
        <div className="footer-brand">
          COWLI
        </div>
      </div>
    </footer>
  );
};

export default Footer;