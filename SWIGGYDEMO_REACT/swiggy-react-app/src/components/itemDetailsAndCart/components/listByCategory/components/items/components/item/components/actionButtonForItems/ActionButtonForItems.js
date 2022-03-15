import React from "react";

function ActionButtonForItems ({pk, count, onClickPlus, onClickMinus}) {
    return (
        <>
            <div className = "addSub">
                <span className = "minus" onClick={ () => {onClickMinus(pk)}}>-</span>
                <span className = "count">{count}</span>
                <span className = "plus" onClick={ () => {onClickPlus(pk)}}>+</span>
            </div>
        </>
    );
};

export default ActionButtonForItems;