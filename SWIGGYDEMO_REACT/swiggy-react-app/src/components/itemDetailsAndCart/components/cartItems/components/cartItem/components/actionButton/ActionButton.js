import './actionButton.style.css';

import React from 'react';

import { connect } from 'react-redux';

import {
    incrementOnPlus,
    decrementOnMinus,
} from '../../../../../../../../actions/cartActionsCreators';

function ActionButton({ pk, count, incrementOnPlus, decrementOnMinus }) {
    return (
        <div className="addSubCart">
            <div className="minus" onClick={() => decrementOnMinus(pk)}>
                -
            </div>
            <div className="count">{count}</div>
            <div className="plus" onClick={() => incrementOnPlus(pk)}>
                +
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementOnPlus: (pk) => {
            dispatch(incrementOnPlus(pk));
        },
        decrementOnMinus: (pk) => {
            dispatch(decrementOnMinus(pk));
        },
    };
};

export default connect(null, mapDispatchToProps)(ActionButton);
