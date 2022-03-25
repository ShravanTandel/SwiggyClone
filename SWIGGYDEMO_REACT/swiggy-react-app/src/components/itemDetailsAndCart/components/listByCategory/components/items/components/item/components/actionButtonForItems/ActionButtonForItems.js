import React from 'react';
import { connect } from 'react-redux';
import {
    decrementOnMinus,
    incrementOnPlus,
} from '../../../../../../../../../../actions/cartActionsCreators';

function ActionButtonForItems({
    decrementOnMinus,
    incrementOnPlus,
    pk,
    count,
}) {
    return (
        <>
            <div className="addSub">
                <span
                    className="minus"
                    onClick={() => {
                        decrementOnMinus(pk);
                    }}
                >
                    -
                </span>
                <span className="count">{count}</span>
                <span
                    className="plus"
                    onClick={() => {
                        incrementOnPlus(pk);
                    }}
                >
                    +
                </span>
            </div>
        </>
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

export default connect(null, mapDispatchToProps)(ActionButtonForItems);
