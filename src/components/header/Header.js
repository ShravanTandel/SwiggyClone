import './header.style.css';

import React from 'react';

function Header() {
    return (
        <nav>
            <div className="rightSide">
                <div className="logo">
                    <h4>Swiggy</h4>
                </div>
                <div className="location">Bangalore</div>
            </div>
            <ul className="nav-link">
                <li>
                    <a href="#search">
                        <span></span>Search
                    </a>
                </li>
                <li>
                    <a href="#offers">
                        <span></span>Offers
                    </a>
                </li>
                <li>
                    <a href="#help">
                        <span></span>Help
                    </a>
                </li>
                <li>
                    <a href="#signin">
                        <span></span>Sign In
                    </a>
                </li>
                <li>
                    <a href="#cart">
                        <span className="cartCount"></span> Cart
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
