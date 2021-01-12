import React from 'react';
import { Link } from 'react-router-dom';

function index(props) {
    const product = props.data;
    return (
        <div className="product-item">
            <div className="product-title">
                <Link to={`/product/${product.slug}/${product.id}`}>{product.name}</Link>
            </div>
            <div className="product-image">
                <img src={product.image && product.image[0] || "https://picsum.photos/300"} alt="Product Image" />
                <div className="product-action">
                    <a href="#"><i className="fa fa-cart-plus" /></a>
                    <Link to={`/product/${product.slug}/${product.id}`}><i className="fa fa-eye" /></Link>
                </div>
            </div>
            <div className="product-price">
                <h3>{new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(product.discount)} <span>VND</span></h3>
                <a className="btn" href="#"><i className="fa fa-shopping-cart" />Buy Now</a>
            </div>
        </div>
    );
}

export default index;