import './breadCrumb.style.css';

import React from 'react';

function BreadCrumb() {
    return (
        <div className="breadCrumbs">
            Home / Bangalore / Shivaji Nagar /{' '}
            <span className="dark"> Burger king</span>
        </div>
    );
}

export default BreadCrumb;
