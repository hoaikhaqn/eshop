import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

function CategoryList(props) {
    return (
        <nav className="navbar bg-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to={`/category/best-seller`}><i className="fa fa-heart"></i>Best seller</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={`/category/promotional`}><i className="fa fa-star"></i>Promotional</Link>
                </li>
                {
                    props.list ? 
                    props.list.map((category, key) => {
                        return (
                            <li className="nav-item" key={key}>
                                <Link className="nav-link" to={`/category/${category.slug}/${category.id}`}><i className="fa fa-tags"></i>{category.name}</Link>
                            </li>
                        )
                    }) :
                    (
                        <li className="nav-item" key={key}>
                            <Skeleton count={5} />
                        </li>
                    )
                }
            </ul>
        </nav>
    );
}

export default CategoryList;