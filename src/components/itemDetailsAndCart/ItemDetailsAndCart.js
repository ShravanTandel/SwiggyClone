import './itemDetailsAndCart.style.css';

import React from 'react';

import Category from './components/category/index';
import ListByCategory from './components/listByCategory/ListbyCategory';
import CartItems from './components/cartItems/CartItems';

function ItemDetailsAndCart({ isVeg, searchInputText }) {
    return (
        <div className="menuAndCart">
            <Category />
            <ListByCategory isVeg={isVeg} searchInputText={searchInputText} />
            <CartItems />
        </div>
    );
}

export default ItemDetailsAndCart;
