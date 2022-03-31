import './category.style.css';

import React from 'react';

function Category({ categoryList }) {
    return (
        <div className="category">
            {categoryList.map((side, index) => {
                return (
                    <li key={index}>
                        <a href={`#${index + 1}`}>{side}</a>
                    </li>
                );
            })}
        </div>
    );
}

export default Category;
