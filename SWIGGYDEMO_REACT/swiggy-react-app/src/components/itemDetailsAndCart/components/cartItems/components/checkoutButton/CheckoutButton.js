import './checkoutButton.style.css';

import React from 'react';

import { useDispatch } from 'react-redux';
import { onCheckout } from '../../../../../../actions/cartActionsCreators';

function CheckoutButton({ data }) {
    const dispatch = useDispatch();
    return (
        <div className="checkout" onClick={() => dispatch(onCheckout())}>
            <button className="button">{data}</button>
        </div>
    );
}

export default CheckoutButton;
