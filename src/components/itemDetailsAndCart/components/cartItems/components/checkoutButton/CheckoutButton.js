import './checkoutButton.style.css';

import React, { useContext } from 'react';

import { connect } from 'react-redux';
import { onCheckout } from '../../../../../../actions/cartActionsCreators';
import { ButtonColor } from '../../../../../../App';
import { bindActionCreators } from 'redux';

function CheckoutButton({ data, onCheckout }) {
    const color = useContext(ButtonColor);
    return (
        <div className="checkout" onClick={onCheckout}>
            <button className={`button ${color}`}>{data}</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCheckout: bindActionCreators(onCheckout, dispatch),
    };
};

export default connect(null, mapDispatchToProps)(CheckoutButton);
