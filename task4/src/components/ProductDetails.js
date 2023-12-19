
import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ product }) => {
  if (!product) {
    return <div>Please select a product</div>;
  }
  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <div className="product-details-info">
        <h2>{product.name}</h2>
        <p>${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
