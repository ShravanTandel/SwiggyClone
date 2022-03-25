import './checkoutButton.style.css';

import React from 'react';

import { connect } from 'react-redux';
import { onCheckout } from '../../../../../../actions/cartActionsCreators';

function CheckoutButton(props) {
    return (
        <div className="checkout" onClick={() => props.onCheckout()}>
            <button className="button">{props.data}</button>
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
