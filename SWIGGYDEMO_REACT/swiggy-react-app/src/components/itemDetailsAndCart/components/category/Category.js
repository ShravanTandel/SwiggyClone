import './category.style.css';

import React from 'react';
import { useSelector } from 'react-redux';

function Category() {
    const { categoryList } = useSelector((state) => state.itemsWithCategory);
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
