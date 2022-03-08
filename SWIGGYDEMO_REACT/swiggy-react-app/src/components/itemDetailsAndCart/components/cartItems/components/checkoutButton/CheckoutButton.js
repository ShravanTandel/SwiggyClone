import './checkoutButton.style.css';

import React from "react";

function CheckoutButton ({data}) {
    return (
        <>
            <div className="checkout">
                    <button className="button">{data}</button>
            </div>
        </>
    );
};

export default CheckoutButton;