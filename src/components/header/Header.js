import './header.style.css';

import React, { useContext } from 'react';
import { ButtonColor } from '../../App';
import { getCartItemCount } from '../../selectors/cartSelector';
import { connect } from 'react-redux';

function Header({ onClick, cartItemCount }) {
    const color = useContext(ButtonColor);
    return (
        <nav>
            <div className="navbar__right-section">
                <div className="navbar__right-section__logo">
                    <h4>Swiggy</h4>
                </div>
                <div className="navbar__right-section__location">Bangalore</div>
            </div>
            <ul className="navbar__nav-link">
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
                        <span className="navbar__nav-link__cartCount">
                            {cartItemCount}
                        </span>{' '}
                        Cart
                    </a>
                </li>
                <li>
                    <div
                        className={`navbar__nav-link__toggleButton ${color}Toggle`}
                        onClick={() => onClick(color)}
                    ></div>
                </li>
            </ul>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        cartItemCount: getCartItemCount(state),
    };
};

export default connect(mapStateToProps)(Header);
