import { createSelector } from 'reselect';

function getCartItems(state) {
    return state.cartItems;
}

const getCartItemCount = createSelector(
    (state) => state.cartItems,
    (cartItems) => cartItems.length
);

export { getCartItems, getCartItemCount };
