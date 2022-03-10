import React from "react";

function ActionButtonForItems ({count, onClickPlus, onClickMinus}) {
    return (
        <>
            <div className = "addSub">
                <span className = "minus" onClick={onClickMinus}>-</span>
                <span className = "count">{count}</span>
                <span className = "plus" onClick={onClickPlus}>+</span>
            </div>
        </>
    );
};

export default ActionButtonForItems;