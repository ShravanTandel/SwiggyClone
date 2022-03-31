import React from 'react';
import { connect } from 'react-redux';
import {
    decrementOnMinus,
    incrementOnPlus,
} from '../../../../../../../../../../actions/cartActionsCreators';
import { bindActionCreators } from 'redux';

function ActionButtonForItems({
    decrementOnMinus,
    incrementOnPlus,
    primaryKey,
    count,
}) {
    return (
        <div className="addSub">
            <span
                className="minus"
                onClick={() => {
                    decrementOnMinus(primaryKey);
                }}
            >
                -
            </span>
            <span className="count">{count}</span>
            <span
                className="plus"
                onClick={() => {
                    incrementOnPlus(primaryKey);
                }}
            >
                +
            </span>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementOnPlus: bindActionCreators(incrementOnPlus, dispatch),
        decrementOnMinus: bindActionCreators(decrementOnMinus, dispatch),
    };
};

export default connect(null, mapDispatchToProps)(ActionButtonForItems);
