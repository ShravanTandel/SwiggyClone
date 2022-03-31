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
            const updatedCartItems = [];

            for (let i = 0; i < state.length; i++) {
                if (state[i].primaryKey === action.payload) {
                    const count = state[i].count - 1;

                    if (count > 0) {
                        const item = state[i];
                        item.count = count;
                        updatedCartItems.push(item);
                    }
                } else {
                    updatedCartItems.push(state[i]);
                }
            }

            return updatedCartItems;
        }

        case 'cart/checkedout': {
            const localCartItems = localStorage.getItem('cart');

            if (localCartItems === null) {
                localStorage.setItem('cart', JSON.stringify(state));
            } else {
                const parsedLocalCartItems = JSON.parse(localCartItems);
                for (var i = 0; i < state.length; i++) {
                    let flag = false;
                    for (var j = 0; j < parsedLocalCartItems.length; j++) {
                        if (
                            parsedLocalCartItems[j].primaryKey ===
                            state[i].primaryKey
                        ) {
                            parsedLocalCartItems[j].count += state[i].count;
                            flag = true;
                            break;
                        }
                    }
                    if (!flag) {
                        parsedLocalCartItems.push(state[i]);
                    }
                }
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
