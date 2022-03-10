import React from "react";
import AddButton from "./AddButton";

function AddButtonContainer ({pk, onClickADD}) {
    function addToCart (pk) {
        onClickADD(pk);
    }
    return (
        <AddButton data="ADD" onClickADD={() => addToCart(pk)}/>
    );
};

export default AddButtonContainer;