import './actionButton.style.css';

import React from 'react';

import { connect } from 'react-redux';

import {
    incrementOnPlus,
    decrementOnMinus,
} from '../../../../../../../../actions/cartActionsCreators';

function ActionButton(props) {
    return (
        <div className="addSubCart">
            <div
                className="minus"
                onClick={() => props.decrementOnMinus(props.pk)}
            >
                -
            </div>
            <div className="count">{props.count}</div>
            <div
                className="plus"
                onClick={() => props.incrementOnPlus(props.pk)}
            >
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
