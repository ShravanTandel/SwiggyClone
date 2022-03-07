import './restaurantDetails.style.css';

import React from "react";

import burgerImage from '../../images/burgerImage.jpeg';

function RestaurantDetails () {
    return (
        <>
            <div className="details">
                <div className="image">
                    <img src={ burgerImage } alt="" />
                </div>
                <div className="dashbroad">
                    <div className="name">
                        Burger King
                    </div>
                    <div className="typeOfFood">
                        American, Fast Food
                    </div>
                    <div className="landmark">
                        Opposite To West Side, Shivaji Nagar | Change Outlet
                    </div>
                    <div className="otherDetails">
                        <div className="rating">
                            <span className="r1">
                                4.2
                            </span>
                            <span className="r2">
                                1000+ Rating
                            </span>
                        </div>
                        <div className="time">
                            <span className="r1">
                                37 mins
                            </span>
                            <span className="r2">
                                Delivery Time
                            </span>
                        </div>
                        <div className="cost">
                            <span className="r1">
                                $ 350
                            </span>
                            <span className="r2">
                                Cost for two
                            </span>
                        </div>
                    </div>
                </div>
                <div className="offer-padding">
                    <div className="offer">
                        <div className="name">
                            OFFER
                        </div>
                        <div className="list">
                            <ul>
                                <li>
                                    40% off up to ₹80 on select items | Use code SPECIALS
                                </li>
                                <li>
                                    30% off up to ₹75 | Use code TRYNEW
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RestaurantDetails;