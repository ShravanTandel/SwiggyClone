import { menuItemList } from '../models/itemList.js';

function getItem(items, id) {
    let item = {};

    for (var i = 0; i < items.length; i++) {
        if (items[i].pk === id) {
            item = items[i];
            break;
        }
    }

    const cartItem = {
        name: item.name,
        count: 1,
        price: item.price,
        isVeg: item.isVeg,
        pk: item.pk,
    };

    return cartItem;
}

const initialState = [];

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'cart/itemAdded': {
            const cartItem = getItem(menuItemList, action.payload);
            return [...state, cartItem];
        }

        case 'cart/itemIncremented': {
            const cartItems = state.map((item) => {
                if (item.pk === action.payload) {
                    return { ...item, count: item.count + 1 };
                }
                return item;
            });

            return cartItems;
        }

        case 'cart/itemDecremented': {
            const updatedCartItems = [];

            for (let i = 0; i < state.length; i++) {
                if (state[i].pk === action.payload) {
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
            let localCartItems = localStorage.getItem('cart');

            if (localCartItems === null) {
                localStorage.setItem('cart', JSON.stringify(state));
            } else {
                localCartItems = JSON.parse(localCartItems);
                for (var i = 0; i < state.length; i++) {
                    let flag = false;
                    for (var j = 0; j < localCartItems.length; j++) {
                        if (localCartItems[j].pk === state[i].pk) {
                            localCartItems[j].count += state[i].count;
                            flag = true;
                            break;
                        }
                    }
                    if (!flag) {
                        localCartItems.push(state[i]);
                    }
                }
                localStorage.setItem('cart', JSON.stringify(localCartItems));
            }

            return [];
        }

        default: {
            return state;
        }
    }
}

export default cartReducer;
