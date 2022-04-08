import './restaurantDetails.style.css';

import React from 'react';

import burgerImage from '../../images/burgerImage.jpeg';

function RestaurantDetails() {
    return (
        <div className="restaurant-details">
            <div className="restaurant-details__image">
                <img src={burgerImage} alt="" />
            </div>
            <div className="restaurant-details__dashboard">
                <div className="restaurant-details__name">Burger King</div>
                <div className="restaurant-details__type-of-food">
                    American, Fast Food
                </div>
                <div className="restaurant-details__landmark">
                    Opposite To West Side, Shivaji Nagar | Change Outlet
                </div>
                <div className="restaurant-details__other-details">
                    <div className="restaurant-details__rating">
                        <span className="restaurant-details__rating__average">
                            4.2
                        </span>
                        <span className="restaurant-details__rating__no-of-rating">
                            1000+ Rating
                        </span>
                    </div>
                    <div className="restaurant-details__time">
                        <span className="restaurant-details__time__minute">
                            37 mins
                        </span>
                        <span className="restaurant-details__time__text">
                            Delivery Time
                        </span>
                    </div>
                    <div className="restaurant-details__cost">
                        <span className="restaurant-details__cost__rupees">
                            $ 350
                        </span>
                        <span className="restaurant-details__cost__count">
                            Cost for two
                        </span>
                    </div>
                </div>
            </div>
            <div className="restaurant-details__offer-padding">
                <div className="restaurant-details__offer">
                    <div className="restaurant-details__offer__name">OFFER</div>
                    <div className="restaurant-details__offer__list">
                        <ul>
                            <li>
                                40% off up to ₹80 on select items | Use code
                                SPECIALS
                            </li>
                            <li>30% off up to ₹75 | Use code TRYNEW</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestaurantDetails;
