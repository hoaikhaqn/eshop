import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CategoryList(props) {
    return (
        <nav className="navbar bg-light">
            <ul className="navbar-nav">
                {
                    props.list.map((category, key) => {
                        return (
                            <li className="nav-item" key={key}>
                                <Link className="nav-link" to={`/category/${category.slug}/${category.id}`}><i className={category.icon}></i>{category.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
}

export default CategoryList;