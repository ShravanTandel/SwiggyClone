import './itemDetailsAndCart.style.css';

import React, { useState } from 'react';

import Category from './components/category/index';
import ListByCategory from './components/listByCategory/ListbyCategory';
import CartItems from './components/cartItems/CartItems';

function ItemDetailsAndCart({
    sideMenu,
    menuItemList,
    isVeg,
    searchInputText,
}) {
    const [cartItems, setCartItems] = useState([]);

    const [sideMenuList, setSideMenuList] = useState([...sideMenu]);

    function addCartItem(primaryKeyOfItem) {
        const item = menuItemList.find((i) => {
            return i.primaryKey === primaryKeyOfItem;
        });

        const cartItem = {
            name: item.name,
            count: 1,
            price: item.price,
            isVeg: item.isVeg,
            primaryKey: item.primaryKey,
        };

        setCartItems((currentState) => {
            return [...currentState, cartItem];
        });
    }

    function increaseCartItemCount(primaryKeyOfItem) {
        const items = cartItems.map((item) => {
            if (item.primaryKey === primaryKeyOfItem) {
                return { ...item, count: item.count + 1 };
            }
            return item;
        });

        setCartItems([...items]);
    }

    function decreaseCartItemCount(primaryKeyOfItem) {
        const items = cartItems.map((item) => {
            if (item.primaryKey === primaryKeyOfItem) {
                const count = item.count - 1;
                return { ...item, count: count };
            } else {
                return item;
            }
        });

        const filteredItems = items.filter((item) => {
            return item.count !== 0;
        });

        setCartItems([...filteredItems]);
    }

    function updateSideMenuList(arr) {
        setSideMenuList([...arr]);
    }

    function checkout() {
        const localCartItems = localStorage.getItem('cart');

        if (localCartItems === null) {
            localStorage.setItem('cart', JSON.stringify(cartItems));
        } else {
            const parsedLocalCartItems = JSON.parse(localCartItems);
            cartItems.forEach((item) => {
                const index = parsedLocalCartItems.findIndex(
                    (i) => i.primaryKey === item.primaryKey
                );
                if (index > -1) {
                    parsedLocalCartItems[index].count += item.count;
                } else {
                    parsedLocalCartItems.push(item);
                }
            });
            localStorage.setItem('cart', JSON.stringify(parsedLocalCartItems));
        }
        setCartItems([]);
    }

    return (
        <div className="menuAndCart">
            <Category content={sideMenuList} />
            <ListByCategory
                data={menuItemList}
                category={sideMenu}
                cartItems={cartItems}
                onClickADD={addCartItem}
                onClickPlus={increaseCartItemCount}
                onClickMinus={decreaseCartItemCount}
                isVeg={isVeg}
                searchInputText={searchInputText}
                onFilter={updateSideMenuList}
            />
            <CartItems
                cartItems={cartItems}
                onClickPlus={increaseCartItemCount}
                onClickMinus={decreaseCartItemCount}
                onCheckout={checkout}
            />
        </div>
    );
}

export default ItemDetailsAndCart;
