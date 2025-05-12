import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { name, price, image } = product;
  
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      <div className="price-tag">{price}$</div>
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <button className="btn" onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;