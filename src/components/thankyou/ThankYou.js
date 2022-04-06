import './thankyou.style.css';

import React, { useContext } from 'react';
import OrderedItem from './orderedItem/OrderedItem';

import burgerImage from '../../images/burgerImage.jpeg';
import { ButtonColor } from '../../App';

export default function ThankYou() {
    const color = useContext(ButtonColor);
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
            <div className={`thankyou_message ${color}-message`}>
                Dear Customer, your order is being placed successfully !!
            </div>
            <div className="thankyou__order-details">
                <div
                    className={`thankyou__order-details__heading ${color}-message`}
                >
                    Ordered Item
                </div>
                <div className="thankyou__order-details__table">
                    {orderedItems.map((item) => {
                        return (
                            <OrderedItem item={item} key={item.primaryKey} />
                        );
                    })}
                </div>
                <div className="thankyou__subtotal">
                    <div className="thankyou__subtotal__restro-detail">
                        <span className="thankyou__subtotal__restro-detail__image">
                            <img src={burgerImage} alt={burgerImage} />
                        </span>
                        <span className="thankyou__subtotal__restro-detail__location-and-name">
                            <div className="thankyou__subtotal__restro-detail__restro-name">
                                Burger King
                            </div>
                            <div className="thankyou__subtotal__restro-detail__restro-location">
                                Shivaji Nagar
                            </div>
                        </span>
                    </div>
                    <div className="thankyou__subtotal__bill">
                        <div className="thankyou__subtotal__bill__heading">
                            Bill details
                        </div>
                        <div className="thankyou__subtotal__bill__total-amount">
                            <span>Total Amount : </span>
                            <span className="thankyou__subtotal__bill__amount">
                                ₹ {subTotal}
                            </span>
                        </div>
                    </div>
                    <div
                        className={`thankyou__subtotal__thankyou-text ${color}`}
                    >
                        Thank You
                    </div>
                </div>
            </div>
        </div>
    );
}
