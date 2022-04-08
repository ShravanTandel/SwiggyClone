import './breadCrumb.style.css';

import React from 'react';

function BreadCrumb() {
    return (
        <div className="breadCrumbs">
            Home / Bangalore / Shivaji Nagar /{' '}
            <span className="breadCrumbs breadCrumbs--dark"> Burger king</span>
        </div>
    );
}

export default BreadCrumb;
