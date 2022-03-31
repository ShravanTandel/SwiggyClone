function addCartItem(pk) {
    return {
        type: 'cart/itemAdded',
        payload: pk,
    };
}

function incrementOnPlus(pk) {
    return {
        type: 'cart/itemIncremented',
        payload: pk,
    };
}

function decrementOnMinus(pk) {
    return {
        type: 'cart/itemDecremented',
        payload: pk,
    };
}

function onCheckout() {
    return {
        type: 'cart/checkedout',
    };
}

export { addCartItem, incrementOnPlus, decrementOnMinus, onCheckout };
