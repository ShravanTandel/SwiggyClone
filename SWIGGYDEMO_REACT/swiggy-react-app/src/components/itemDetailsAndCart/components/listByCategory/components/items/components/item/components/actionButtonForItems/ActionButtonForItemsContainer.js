import React from "react";
import ActionButtonForItems from "./ActionButtonForItems";

function ActionButtonForItemsContainer ({pk, count, onClickPlus, onClickMinus}) {

    function increaseCountItems (pk) {
        onClickPlus(pk);
    }

    function decreaseCountItems (pk) {
        onClickMinus(pk);
    }
    return (
        <ActionButtonForItems count={count} onClickPlus={() => increaseCountItems(pk)} onClickMinus={() => decreaseCountItems(pk)}/>
    );
};

export default ActionButtonForItemsContainer;