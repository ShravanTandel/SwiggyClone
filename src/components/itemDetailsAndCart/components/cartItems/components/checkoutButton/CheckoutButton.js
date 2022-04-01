import './checkoutButton.style.css';

import React, { useContext } from 'react';

import { connect } from 'react-redux';
import { onCheckout } from '../../../../../../actions/cartActionsCreators';
import { ButtonColor } from '../../../../../../App';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

function CheckoutButton({ data, onCheckout, history }) {
    const color = useContext(ButtonColor);

    function onClickHandler() {
        onCheckout();
        history.push('/thankyou');
    }
    return (
        <div className="checkout" onClick={onClickHandler}>
            <button className={`button ${color}`}>{data}</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCheckout: bindActionCreators(onCheckout, dispatch),
    };
};

export default connect(null, mapDispatchToProps)(withRouter(CheckoutButton));
