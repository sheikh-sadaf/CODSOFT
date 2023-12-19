
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ProductCatalog from './components/ProductCatalog';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';
import AboutUs from './components/AboutUs';
import { products } from './data';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, { product }]);
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter(item => item.product.id !== productToRemove.id);
    setCart(updatedCart);
  };

  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/cart">Cart ({cart.length})</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/products">
            <ProductCatalog products={products} addToCart={addToCart} />
          </Route>
          <Route path="/product/:id">
            <ProductDetails products={products} />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/cart">
            <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
          </Route>
          <Route path="/">
            <p className='welcom'>Welcome to our online store!</p>
            <h2 className='Product-title'>Products</h2>
            <ProductCatalog products={products} addToCart={addToCart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
