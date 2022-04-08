import './actionButton.style.css';

import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    incrementOnPlus,
    decrementOnMinus,
} from '../../../../../../../../actions/cartActionsCreators';

function ActionButton({
    primaryKey,
    count,
    incrementOnPlus,
    decrementOnMinus,
}) {
    return (
        <div className="addSubCart">
            <div className="minus" onClick={() => decrementOnMinus(primaryKey)}>
                -
            </div>
            <div className="count">{count}</div>
            <div className="plus" onClick={() => incrementOnPlus(primaryKey)}>
                +
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementOnPlus: bindActionCreators(incrementOnPlus, dispatch),
        decrementOnMinus: bindActionCreators(decrementOnMinus, dispatch),
    };
};

export default connect(null, mapDispatchToProps)(ActionButton);
