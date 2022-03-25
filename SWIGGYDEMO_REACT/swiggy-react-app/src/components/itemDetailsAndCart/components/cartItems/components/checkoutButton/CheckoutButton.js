import './checkoutButton.style.css';

import React from 'react';

import { connect } from 'react-redux';
import { onCheckout } from '../../../../../../actions/cartActionsCreators';

function CheckoutButton({ data, onCheckout }) {
    return (
        <div className="checkout" onClick={() => onCheckout()}>
            <button className="button">{data}</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCheckout: () => {
            dispatch(onCheckout());
        },
    };
};

export default connect(null, mapDispatchToProps)(CheckoutButton);
