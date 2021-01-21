import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency, toSlug } from '../../utils';

import './style.scss';
function ProductItem(props) {
    const product = props.data;

    return (
        <div className="product-item">
                <div className="product-image">
                    <img src={product.images && product.images[0]} alt="Product Image" />
                </div>
                <div className="product-meta">
                    <div className="product-title" title={product.name}><Link to={`/product/${toSlug(product.name)}/${product.id}`}>{product.name}</Link></div>
                    <div className="product-price">
                        <div className="product-price__original">
                            {formatCurrency(product.originalPrice)}
                        </div>
                        <div className="product-price__sale">
                            {formatCurrency(product.price)}
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default ProductItem;