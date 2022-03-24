import './header.style.css';

import React from 'react';

function Header() {
    return (
        <>
            <nav>
                <div className="rightSide">
                    <div className="logo">
                        <h4>Swiggy</h4>
                    </div>
                    <div className="location">Bangalore</div>
                </div>
                <ul className="nav-link">
                    <li>
                        <a href="#1">
                            <span></span>Search
                        </a>
                    </li>
                    <li>
                        <a href="#2">
                            <span></span>Offers
                        </a>
                    </li>
                    <li>
                        <a href="#3">
                            <span></span>Help
                        </a>
                    </li>
                    <li>
                        <a href="#4">
                            <span></span>Sign In
                        </a>
                    </li>
                    <li>
                        <a href="#5">
                            <span className="cartCount"></span> Cart
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Header;
