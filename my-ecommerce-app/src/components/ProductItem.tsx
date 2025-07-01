import React from 'react';

interface ProductItemProps {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    onAddToCart: (id: number) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ id, title, price, imageUrl, onAddToCart }) => {
    return (
        <div className="product-item">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>${price.toFixed(2)}</p>
            <button onClick={() => onAddToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;