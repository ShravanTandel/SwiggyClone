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
        let item = {};
        for (var i = 0; i < menuItemList.length; i++) {
            if (menuItemList[i].primaryKey === primaryKeyOfItem) {
                item = menuItemList[i];
                break;
            }
        }

        let cartItem = {
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
        let items = cartItems;

        for (var i = 0; i < items.length; i++) {
            if (items[i].primaryKey === primaryKeyOfItem) {
                items[i].count++;
                break;
            }
        }

        setCartItems([...items]);
    }

    function decreaseCartItemCount(primaryKeyOfItem) {
        let items = cartItems;

        for (var i = 0; i < items.length; i++) {
            if (items[i].primaryKey === primaryKeyOfItem) {
                items[i].count--;

                if (items[i].count === 0) {
                    items.splice(i, 1);
                }
                break;
            }
        }

        setCartItems([...items]);
    }

    function updateSideMenuList(arr) {
        setSideMenuList([...arr]);
    }

    function checkout() {
        let localCartItems = localStorage.getItem('cart');

        if (localCartItems === null) {
            localStorage.setItem('cart', JSON.stringify(cartItems));
        } else {
            localCartItems = JSON.parse(localCartItems);
            for (var i = 0; i < cartItems.length; i++) {
                let flag = false;
                for (var j = 0; j < localCartItems.length; j++) {
                    if (
                        localCartItems[j].primaryKey === cartItems[i].primaryKey
                    ) {
                        localCartItems[j].count += cartItems[i].count;
                        flag = true;
                        break;
                    }
                }
                if (!flag) {
                    localCartItems.push(cartItems[i]);
                }
            }
            localStorage.setItem('cart', JSON.stringify(localCartItems));
        }

        localCartItems = localStorage.getItem('cart');
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
