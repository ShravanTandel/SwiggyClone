import React from 'react';
import { useDispatch } from 'react-redux';
import {
    decrementOnMinus,
    incrementOnPlus,
} from '../../../../../../../../../../actions/cartActionsCreators';

function ActionButtonForItems({ pk, count }) {
    const dispatch = useDispatch();
    return (
        <>
            <div className="addSub">
                <span
                    className="minus"
                    onClick={() => {
                        dispatch(decrementOnMinus(pk));
                    }}
                >
                    -
                </span>
                <span className="count">{count}</span>
                <span
                    className="plus"
                    onClick={() => {
                        dispatch(incrementOnPlus(pk));
                    }}
                >
                    +
                </span>
            </div>
        </>
    );
}

export default ActionButtonForItems;
