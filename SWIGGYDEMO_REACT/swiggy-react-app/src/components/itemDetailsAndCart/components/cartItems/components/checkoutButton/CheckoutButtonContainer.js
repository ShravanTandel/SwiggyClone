import React from "react";
import CheckoutButton from "./CheckoutButton";

function CheckoutButtonContainer ({onCheckout}) {
    return (
        <CheckoutButton data="CHECKOUT" onCheckout={() => onCheckout()}/>
    );
};

export default CheckoutButtonContainer;