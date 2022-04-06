import './itemDetailsAndCart.style.css';

import React, { useState } from 'react';

import Category from './components/category/index';
import ListByCategory from './components/listByCategory/ListbyCategory';
import CartItems from './components/cartItems/CartItems';
import { sideMenu } from '../../models/menu';

function ItemDetailsAndCart({ isVeg, searchInputText }) {
    const [categoryList, setCategoryList] = useState([...sideMenu]);

    function onFilter(arr) {
        setCategoryList(arr);
    }
    return (
        <div className="menu-item-and-cart">
            <Category categoryList={categoryList} />
            <ListByCategory
                isVeg={isVeg}
                searchInputText={searchInputText}
                onFilter={onFilter}
            />
            <CartItems />
        </div>
    );
}

export default ItemDetailsAndCart;
