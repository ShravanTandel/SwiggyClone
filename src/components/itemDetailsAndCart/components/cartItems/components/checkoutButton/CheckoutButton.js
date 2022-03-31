import './checkoutButton.style.css';

import React from 'react';

function CheckoutButton({ data, onCheckout }) {
    return (
        <div className="checkout" onClick={onCheckout}>
            <button className="button">{data}</button>
        </div>
    );
}

export default CheckoutButton;
