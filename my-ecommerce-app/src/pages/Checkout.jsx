import React from 'react';
import { useCart } from '../hooks/useCart';

const Checkout = () => {
    const { cartItems, total } = useCart();

    return (
        <div>
            <h2>Checkout</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty. Please add items to your cart before proceeding.</p>
            ) : (
                <div>
                    <h3>Your Items:</h3>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                {item.name} - ${item.price}
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${total}</h3>
                    <button>Complete Purchase</button>
                </div>
            )}
        </div>
    );
};

export default Checkout;