import './thankyou.style.css';

import React from 'react';
import OrderedItem from './orderedItem/OrderedItem';

import burgerImage from '../../images/burgerImage.jpeg';

export default function ThankYou() {
    function getOrderedItems() {
        const orderedItems = localStorage.getItem('cart');
        const parsedOrderedItems = JSON.parse(orderedItems);
        return parsedOrderedItems;
    }

    const orderedItems = getOrderedItems();

    const subTotal = orderedItems.reduce((prev, cur) => {
        return prev + cur.price * cur.count;
    }, 0);
    return (
        <div className="thankyou">
            <div className="thankyou_message">
                Dear Customer, your order is being placed successfully !!
            </div>
            <div className="order_detail_and_subTotal">
                <div className="ordertable_heading">Ordered Item</div>
                <div className="ordertable">
                    {orderedItems.map((item) => {
                        return (
                            <OrderedItem item={item} key={item.primaryKey} />
                        );
                    })}
                </div>
                <div className="order_subTotal">
                    <div className="restro_detail">
                        <span className="image">
                            <img src={burgerImage} alt={burgerImage} />
                        </span>
                        <span className="restro_name_location">
                            <div className="restro_name">Burger King</div>
                            <div className="restro_location">Shivaji Nagar</div>
                        </span>
                    </div>
                    <div className="bill">
                        <div className="heading">Bill details</div>
                        <div className="total_amount">
                            <span>Total Amount : </span>
                            <span className="amount">₹ {subTotal}</span>
                        </div>
                    </div>
                    <div className="thankyou_text">Thank You</div>
                </div>
            </div>
        </div>
    );
}
