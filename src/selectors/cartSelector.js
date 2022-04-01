import { createSelector } from 'reselect';

const getCartItems = createSelector(
    (state) => state.cartItems,
    (cartItems) => cartItems
);

export { getCartItems };
