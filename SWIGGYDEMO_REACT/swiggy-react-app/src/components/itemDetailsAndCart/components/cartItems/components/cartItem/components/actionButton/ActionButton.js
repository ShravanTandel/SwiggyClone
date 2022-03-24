import './actionButton.style.css';

import React from 'react';

import { useDispatch } from 'react-redux';

import {
    incrementOnPlus,
    decrementOnMinus,
} from '../../../../../../../../actions/cartActionsCreators';

function ActionButton({ count, pk }) {
    const dispatch = useDispatch();

    return (
        <div className="addSubCart">
            <div
                className="minus"
                onClick={() => dispatch(decrementOnMinus(pk))}
            >
                -
            </div>
            <div className="count">{count}</div>
            <div className="plus" onClick={() => dispatch(incrementOnPlus(pk))}>
                +
            </div>
        </div>
    );
}

export default ActionButton;
