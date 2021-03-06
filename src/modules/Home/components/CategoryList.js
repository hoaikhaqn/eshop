import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import {toSlug} from '../../../utils';

function CategoryList(props) {
    return (
        <nav className="navbar bg-light">
            <ul className="navbar-nav">
                {
                    props.list &&
                    <li className="nav-item">
                        <Link className="nav-link" to={`products/best-seller`}><i className="fa fa-heart"></i>Best seller</Link>
                    </li>
                    ||
                    <li className="nav-item">
                        <Skeleton count={1} height={30} />
                    </li>

                }
                {
                    props.list &&
                    <li className="nav-item">
                        <Link className="nav-link" to={`products/promotional`}><i className="fa fa-star"></i>Promotional</Link>
                    </li>
                    ||
                    <li className="nav-item">
                        <Skeleton count={1} height={30} />
                    </li>
                }
                {
                    props.list ? props.list.map((category, key) => {
                        return (
                            <li className="nav-item" key={key}>
                                <Link className="nav-link" to={`/category/${toSlug(category.name)}/${category.id}`}><i className="fa fa-tags"></i>{category.name}</Link>
                            </li>
                        )
                    }) :
                        <li className="nav-item">
                            <Skeleton count={8} height={30} />
                        </li>
                }
            </ul>
        </nav>
    );
}

export default CategoryList;