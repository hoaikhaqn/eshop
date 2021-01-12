import React from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils';

import './style.scss';
function index(props) {
    const product = props.data;
    return (
        <div className="product-item">
            <div className="product-title">
                <Link to={`/product/${product.slug}/${product.id}`}>{product.name}</Link>
            </div>
            <div className="product-image">
                <img src={product.images && product.images[0]} alt="Product Image"/>
                <div className="product-action">
                    <a href="#"><i className="fa fa-cart-plus" /></a>
                    <Link to={`/product/${product.slug}/${product.id}`}><i className="fa fa-eye" /></Link>
                </div>
            </div>
            <div className="product-price">
                <h3>{formatCurrency(product.discount)}</h3>
                <a className="btn" href="#"><i className="fa fa-shopping-cart" />Buy Now</a>
            </div>
        </div>
    );
}

export default index;