import React from "react";
import ActionButton from "./ActionButton";

function ActionButtonContainer ({count, onClickPlus, pk, onClickMinus}) {

    function increaseOnPlus (pk) {
        onClickPlus(pk);
    }

    function decreaseOnMinus (pk) {
        onClickMinus(pk);
    }
    return (
        <ActionButton count={count} onClickPlus={() => increaseOnPlus(pk)} onClickMinus={() => decreaseOnMinus(pk)}/>
    );
};

export default ActionButtonContainer;