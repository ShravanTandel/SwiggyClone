import './category.style.css';

import React from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
    return {
        categoryList: state.itemsWithCategory.categoryList,
    };
};

export default connect(mapStateToProps)(Category);
