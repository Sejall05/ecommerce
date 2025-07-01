import React from 'react';
import { useCart } from '../hooks/useCart';

const Checkout: React.FC = () => {
    const { cartItems, totalAmount } = useCart();

    const handleCheckout = () => {
        // Logic for handling checkout process
        alert('Proceeding to payment...');
    };

    return (
        <div>
            <h1>Checkout</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <h2>Your Items:</h2>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                {item.name} - ${item.price} x {item.quantity}
                            </li>
                        ))}
                    </ul>
                    <h3>Total Amount: ${totalAmount}</h3>
                    <button onClick={handleCheckout}>Proceed to Payment</button>
                </div>
            )}
        </div>
    );
};

export default Checkout;