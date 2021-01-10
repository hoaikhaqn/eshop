import React from 'react';
import {Link} from 'react-router-dom';

function index(props) {
    return (
        <div className="product-item">
            <div className="product-title">
                <Link to="/product/p/1">Product Name</Link>
                <div className="ratting">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                </div>
            </div>
            <div className="product-image">
                <img src="https://picsum.photos/300" alt="Product Image" />
                <div className="product-action">
                    <a href="#"><i className="fa fa-cart-plus" /></a>
                    <a href="#"><i className="fa fa-heart" /></a>
                    <a href="#"><i className="fa fa-search" /></a>
                </div>
            </div>
            <div className="product-price">
                <h3><span>$</span>99</h3>
                <a className="btn" href="#"><i className="fa fa-shopping-cart" />Buy Now</a>
            </div>
        </div>
    );
}

export default index;