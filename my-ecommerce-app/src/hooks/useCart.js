import { useState } from 'react';

const useCart = () => {
    const [cartItems, setCartItems] = useState([]);
    
    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
    };

    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    return {
        cartItems,
        total,
        addToCart,
        removeFromCart,
    };
};

export default useCart;