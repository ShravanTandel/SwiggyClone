import './itemDetailsAndCart.style.css';

import React from 'react';

// import { sideMenu } from '../../models/menu.mjs';

import Category from './components/category/index'; 
import ListByCategory from './components/listByCategory/ListbyCategory';
import CartItems from './components/cartItems/CartItems';

function ItemDetailsAndCart ({sideMenu, menuItemList, cart,}) {
    return (
        <>
            <div className="menuAndCart">
                <Category content={sideMenu}/>
                <ListByCategory data={menuItemList} category={sideMenu}/>
                <CartItems cartItems={cart} />
            </div>
        </>
    );
};

export default ItemDetailsAndCart;