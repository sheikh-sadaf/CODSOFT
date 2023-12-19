
import React from 'react';
import './ShoppingCart.css';

const ShoppingCart = ({ cart, removeFromCart }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.product.id} className="cart-item">
          <img className='images-cart' src={item.product.image} alt="" />
            <div>
              <p>{item.product.name.slice(0,20)}</p>
              <p>${item.product.price.toFixed(2)}</p>
            </div>
            <button onClick={() => removeFromCart(item.product)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${cart.reduce((total, item) => total + item.product.price, 0).toFixed(2)}</p>
    </div>
  );
};

export default ShoppingCart;
