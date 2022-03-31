import { menuItemList } from '../models/itemList.js';
import { produce } from 'immer';

function getItem(items, id) {
    const item = items.find((i) => {
        return i.primaryKey === id;
    });

    const cartItem = {
        name: item.name,
        count: 1,
        price: item.price,
        isVeg: item.isVeg,
        primaryKey: item.primaryKey,
    };

    return cartItem;
}

const initialState = [];

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'cart/itemAdded': {
            const cartItem = getItem(menuItemList, action.payload);
            const newState = produce(state, (draft) => {
                draft.push(cartItem);
            });
            return newState;
        }

        case 'cart/itemIncremented': {
            const cartItems = state.map((item) => {
                if (item.primaryKey === action.payload) {
                    return { ...item, count: item.count + 1 };
                }
                return item;
            });

            return cartItems;
        }

        case 'cart/itemDecremented': {
            const items = state.map((item) => {
                if (item.primaryKey === action.payload) {
                    const count = item.count - 1;
                    return { ...item, count: count };
                } else {
                    return item;
                }
            });

            const filteredItems = items.filter((item) => {
                return item.count !== 0;
            });

            return filteredItems;
        }

        case 'cart/checkedout': {
            const localCartItems = localStorage.getItem('cart');

            if (localCartItems === null) {
                localStorage.setItem('cart', JSON.stringify(state));
            } else {
                const parsedLocalCartItems = JSON.parse(localCartItems);
                state.forEach((item) => {
                    const index = parsedLocalCartItems.findIndex(
                        (i) => i.primaryKey === item.primaryKey
                    );
                    if (index > -1) {
                        parsedLocalCartItems[index].count += item.count;
                    } else {
                        parsedLocalCartItems.push(item);
                    }
                });
                localStorage.setItem(
                    'cart',
                    JSON.stringify(parsedLocalCartItems)
                );
            }
            return [];
        }

        default: {
            return state;
        }
    }
}

export default cartReducer;
