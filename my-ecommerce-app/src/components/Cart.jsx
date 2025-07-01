import React from 'react';
import { useCart } from '../hooks/useCart';

const Cart = () => {
    const { cartItems, total, removeFromCart } = useCart();

    return (
        <div>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                {item.name} - ${item.price}
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${total}</h3>
                    <button>Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;