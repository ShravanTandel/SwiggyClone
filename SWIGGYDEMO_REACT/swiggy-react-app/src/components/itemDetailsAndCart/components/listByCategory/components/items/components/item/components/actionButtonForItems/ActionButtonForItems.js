import React from 'react';
import { connect } from 'react-redux';
import {
    decrementOnMinus,
    incrementOnPlus,
} from '../../../../../../../../../../actions/cartActionsCreators';

function ActionButtonForItems(props) {
    return (
        <>
            <div className="addSub">
                <span
                    className="minus"
                    onClick={() => {
                        props.decrementOnMinus(props.pk);
                    }}
                >
                    -
                </span>
                <span className="count">{props.count}</span>
                <span
                    className="plus"
                    onClick={() => {
                        props.incrementOnPlus(props.pk);
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
