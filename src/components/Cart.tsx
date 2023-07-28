import React from 'react'

interface CartProps {
    items: string[];
    onEmpty?: () => void;
}
const Cart = ({ items, onEmpty }: CartProps) => {
    return (
        <div>
            <p>Cart Items</p>
            <ul>
                {items.map((item) => <li>{item}</li>)}
            </ul>
            <button onClick={onEmpty}>Empty Cart</button>
        </div>
    )
}

export default Cart