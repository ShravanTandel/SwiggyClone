import './header.style.css';

import React from 'react';

function Header () {
    return (
        <>
            <nav>
                <div className="rightSide">
                    <div className="logo">
                        <h4>Swiggy</h4>
                    </div>
                    <div className="location">
                        Bangalore
                    </div>
                </div>
                <ul className="nav-link">
                    <li>
                        <a href="#"><span></span>Search</a>
                    </li>
                    <li>
                        <a href="#"><span></span>Offers</a>
                    </li>
                    <li>
                        <a href="#"><span></span>Help</a>
                    </li>
                    <li>
                        <a href="#"><span></span>Sign In</a>
                    </li>
                    <li>
                        {/* <a href="#"><span className = "cartCount">${cart.length}</span> Cart</a> */}
                        <a href="#"><span className = "cartCount"></span> Cart</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Header;