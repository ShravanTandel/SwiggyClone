import './itemDetailsAndCart.style.css';

import React, { useState } from 'react';

import Category from './components/category/index'; 
import ListByCategory from './components/listByCategory/ListbyCategory';
import CartItems from './components/cartItems/CartItems';

function ItemDetailsAndCart ({sideMenu, menuItemList, isVeg, searchInputText}) {

    const [ cartItems, setCartItems ] = useState([]);

    const [ sideMenuList, setSideMenuList ] = useState([...sideMenu]);

    function addCartItem (pkOfItem) {
        let item = {};
        for (var i=0; i<menuItemList.length; i++) {
            if (menuItemList[i].pk === pkOfItem) {
                item = menuItemList[i];
                break;
            }
        }

        let cartItem = {
            name: item.name,
            count: 1,
            price: item.price,
            isVeg: item.isVeg,
            pk: item.pk,
        }
        setCartItems( (currentState) => {
            return [...currentState, cartItem];
        })
    }

    function increaseCartItemCount (pkOfItem) {
        let items = cartItems;

        for (var i=0; i<items.length; i++) {
            if (items[i].pk === pkOfItem) {
                items[i].count ++;
                break;
            }
        }

        setCartItems([...items]);
    }

    function decreaseCartItemCount (pkOfItem) {
        let items = cartItems;

        for (var i=0; i<items.length; i++) {
            if (items[i].pk === pkOfItem) {
                items[i].count --;

                if (items[i].count === 0) {
                    items.splice(i, 1);
                }
                break;
            }
        }

        setCartItems([...items]);
    }

    function updateSideMenuList (arr) {
        setSideMenuList([...arr]);
        console.log("Hi")
        console.log(sideMenuList);
    }

    return (
        <>
            <div className="menuAndCart">
                <Category content={sideMenuList}/>
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
                <CartItems cartItems={cartItems} onClickPlus={increaseCartItemCount} onClickMinus={decreaseCartItemCount}/>
            </div>
        </>
    );
};

export default ItemDetailsAndCart;