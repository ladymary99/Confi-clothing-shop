import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Products.css';

const products = [
  {
    id: 1,
    name: 'Camo Cargo Pants',
    price: '30$',
    image: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Vintage Brown Pants',
    price: '30$',
    image: 'https://images.pexels.com/photos/6311158/pexels-photo-6311158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Designer Denim',
    price: '30$',
    image: 'https://images.pexels.com/photos/6069555/pexels-photo-6069555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Products = () => {
  const sectionRef = useRef(null);
  const productsRef = useRef([]);
  
  useEffect(() => {
    // Product hover animations
    productsRef.current.forEach(product => {
      const image = product.querySelector('.product-image');
      const priceTag = product.querySelector('.price-tag');
      const button = product.querySelector('.cart-btn');
      
      const tl = gsap.timeline({ paused: true });
      
      tl.to(image, {
        duration: 0.4,
        scale: 1.05,
        ease: 'power2.out'
      })
      .to(priceTag, {
        duration: 0.3,
        y: -5,
        ease: 'power1.out'
      }, 0)
      .to(button, {
        duration: 0.3,
        y: -5,
        ease: 'power1.out'
      }, 0);
      
      product.addEventListener('mouseenter', () => {
        tl.play();
      });
      
      product.addEventListener('mouseleave', () => {
        tl.reverse();
      });
    });
    
    // Scroll animation
    gsap.from(sectionRef.current.querySelector('.section-title'), {
      duration: 0.8,
      y: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    });
    
    gsap.from(productsRef.current, {
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        toggleActions: 'play none none none'
      }
    });
  }, []);
  
  return (
    <section className="products-section" ref={sectionRef}>
      <div className="container">
        <div className="products-header">
          <h2 className="section-title">Best Seller Products</h2>
          <div className="see-more">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <div 
              className="product-card" 
              key={product.id}
              ref={el => productsRef.current[index] = el}
            >
              <div className="product-image-container">
                <div className="price-tag">{product.price}</div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <button className="cart-btn">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;