import React from 'react';

function ActionButtonForItems({
    count,
    onClickPlus,
    onClickMinus,
    primaryKey,
}) {
    return (
        <div className="addSub">
            <span className="minus" onClick={() => onClickMinus(primaryKey)}>
                -
            </span>
            <span className="count">{count}</span>
            <span className="plus" onClick={() => onClickPlus(primaryKey)}>
                +
            </span>
        </div>
    );
}

export default ActionButtonForItems;
