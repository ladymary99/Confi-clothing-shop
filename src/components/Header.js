import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { getCartCount, toggleCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <Menu size={24} />
        </button>

        <div className="header-nav">
          <a href="#home">Home</a>
          <a href="#collections">Collections</a>
          <a href="#blog">Blog</a>
        </div>

        <a href="/" className="header-logo">COWLI</a>

        <div className="header-actions">
          <button className="header-icon">
            <Search size={20} />
          </button>
          <button className="header-icon">
            <User size={20} />
          </button>
          <button className="header-icon" onClick={toggleCart}>
            <ShoppingBag size={20} />
            {getCartCount() > 0 && <span className="cart-badge">{getCartCount()}</span>}
            }
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <a href="/" className="header-logo">COWLI</a>
          <button onClick={toggleMobileMenu}>
            <X size={24} />
          </button>
        </div>
        <div className="mobile-menu-nav">
          <a href="#home" onClick={toggleMobileMenu}>Home</a>
          <a href="#collections" onClick={toggleMobileMenu}>Collections</a>
          <a href="#blog" onClick={toggleMobileMenu}>Blog</a>
        </div>
      </div>
    </header>
  );
};

export default Header;