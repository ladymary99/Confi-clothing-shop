import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { 
    cart, 
    isCartOpen, 
    toggleCart, 
    addToCart, 
    removeFromCart, 
    getCartTotal,
    clearCart
  } = useCart();

  return (
    <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h3>Your Cart ({cart.length})</h3>
        <button onClick={toggleCart}>
          <X size={20} />
        </button>
      </div>
      
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h4 className="cart-item-name">{item.name}</h4>
                <p className="cart-item-price">${item.price}</p>
                <div className="cart-item-quantity">
                  <button onClick={() => removeFromCart(item.id)}>
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item)}>
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
      {cart.length > 0 && (
        <div className="cart-footer">
          <div className="cart-total">
            <span>Total</span>
            <span>${getCartTotal()}</span>
          </div>
          <div className="cart-actions">
            <button className="btn btn-outline" onClick={clearCart}>Clear</button>
            <button className="btn">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;