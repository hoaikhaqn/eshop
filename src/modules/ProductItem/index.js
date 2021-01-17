import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency, toSlug } from '../../utils';

import './style.scss';
function ProductItem(props) {
    const product = props.data;

    const addCartItem = (item) => {
        // if(!cart.find(()=>cartItem.id == item.id)){
        //     setCart([...cart,{...item,quantity:1}]);
        // }else{
        //     let newCart = [...cart]
        //     let cartIndex = cart.findIndex(()=>cartItem.id == item.id)
        //     newCart[cartIndex].quantity++;
        //     setCart(newCart);
        // }
    }


    return (
        <div className="product-item">
            <Link to={`/product/${toSlug(product.name)}/${product.id}`}>
                <div className="product-image">
                    <img src={product.images && product.images[0]} alt="Product Image" />
                </div>
                <div className="product-meta">
                    <div className="product-title">{product.name}</div>
                    <div className="product-price">
                        <div className="product-price__original">
                            {formatCurrency(product.price)}
                        </div>
                        <div className="product-price__sale">
                            {formatCurrency(product.discount)}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProductItem;