import React, { useState } from 'react';
import ProductList from '../components/ProductList';

const initialProducts = [
    { id: 1, name: 'Product A', price: 19.99 },
    { id: 2, name: 'Product B', price: 29.99 },
    { id: 3, name: 'Product C', price: 39.99 },
];

const Home = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.name} added to cart!`);
    };

    return (
        <div>
            <h1>Welcome to Our E-commerce Store</h1>
            <ProductList products={initialProducts} addToCart={addToCart} />
        </div>
    );
};

export default Home;