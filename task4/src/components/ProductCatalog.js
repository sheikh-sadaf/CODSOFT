
import React from 'react';
import './ProductCatalog.css';

const ProductCatalog = ({ products, addToCart }) => {
  return (
    <div className="product-catalog">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img className='images' src={product.image} alt={product.name} />
          <div className="product-info">
            <p>{product.name.slice(0,20)}</p>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCatalog;
