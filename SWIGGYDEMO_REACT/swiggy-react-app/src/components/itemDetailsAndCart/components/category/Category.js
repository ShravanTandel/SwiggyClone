import './category.style.css';

import React from 'react';

// import { sideMenu } from '../../../models/menu.mjs';

function Category ({content}) {
    return (
        <>
            <div className='category'>
                {
                    content.map( (side, index) => {
                        return (
                            <li key={index}><a href="#${index + 1}">{side}</a></li>
                        );
                    })
                }
            </div>
        </>
    );
};

export default Category;