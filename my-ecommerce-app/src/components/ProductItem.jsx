import React from 'react';

const ProductItem = ({ product, addToCart }) => (
    <li>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
    </li>
);

export default ProductItem;