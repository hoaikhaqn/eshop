import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from '../../firebase';
import { AuthContext } from '../../contexts/AuthContext';
import { CartContext } from '../../contexts/CartContext';
import { toSlug, formatCurrency, getTotalCart } from '../../utils';

import './style.scss';
function Cart(props) {
    const history = useHistory();
    const { auth } = useContext(AuthContext);
    const { cart, setCart } = useContext(CartContext);
    const [quantityItem, setQuantityItem] = useState();

    const onChangeQuantity = (e, itemId) => {
        let regex = new RegExp(/[1-9]\d*/g);
        if (e.target.value == '' || regex.test(e.target.value)) {
            setQuantityItem({
                id: itemId,
                value: e.target.value
            })
        }
    }
    const onBlurQuanity = (e, itemId) => {
        if (e.target.value == '') {
            setQuantityItem({
                id: itemId,
                value: 1
            })
        }
    }
    const HandleQuanity = (action, itemId) => {
        let item = cart.products.find(item => item.id == itemId);
        if (action == 'increase') {
            setQuantityItem({
                id: itemId,
                value: item.quantity + 1
            })
        }
        if (action == 'decrease' && item.quantity > 1) {
            setQuantityItem({
                id: itemId,
                value: item.quantity - 1
            })
        }
    }

    useEffect(()=>{
        if(!auth){
            history.push("/login")
        }
    },[auth])

    useEffect(() => {
        if (quantityItem) {
            let newCart = { ...cart };
            let item = newCart.products.find(item => item.id == quantityItem.id);
            item.quantity = quantityItem.value;
            newCart = {
                ...newCart,
                ...getTotalCart(newCart.products)
            }
            setCart(newCart);
            firebase.updateCart(newCart)
        }
    }, [quantityItem])

    const handelRemoveCartItem = async (cartItem) => {
        let newCart = { ...cart };
        newCart.totalQuantity = newCart.totalQuantity - cartItem.quantity;
        newCart.totalAmount = newCart.totalAmount - cartItem.price * cartItem.quantity;

        let indexItem = newCart.products.findIndex(item => item.id == cartItem.id);
        newCart.products.splice(indexItem, 1);
        newCart = {
            ...newCart,
            ...getTotalCart(newCart.products)
        }
        setCart(newCart);
        firebase.updateCart(newCart);
    }
    return (
        <div className="cart-page">
            <div className="container">
                {
                    cart && cart.totalQuantity > 0 ? (
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="cart-page-inner">
                                    <h3><b>Your cart</b> ({cart && cart.totalQuantity || 0} items) </h3>
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <tbody className="align-middle cart-container">
                                                {
                                                    cart && cart.products.map((cartItem, key) => {
                                                        return (
                                                            <tr key={key} id={cartItem.id}>
                                                                <td>
                                                                    <div className="product-meta">
                                                                        <Link to={`/product/${toSlug(cartItem.name)}/${cartItem.id}`}>
                                                                            <div className="product-img">
                                                                                <img src={cartItem.image} alt="Image" />
                                                                            </div>
                                                                        </Link>
                                                                        <div style={{ textAlign: "left" }}>
                                                                            <Link to={`/product/${toSlug(cartItem.name)}/${cartItem.id}`}><b style={{ display: "block" }}>{cartItem.name}</b></Link>
                                                                            <p>{cartItem.color ? cartItem.color : ''}{cartItem.color && cartItem.size ? ' - ' : ''}{cartItem.size ? cartItem.size : ''}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <p style={{ marginBottom: "0" }}>{formatCurrency(cartItem.price)}</p>
                                                                    <span style={{ textDecoration: "line-through", fontSize: "13px" }}>{formatCurrency(cartItem.originPrice)}</span>
                                                                </td>
                                                                <td>
                                                                    <div className="qty">
                                                                        <button className="btn-minus" onClick={() => HandleQuanity('decrease', cartItem.id)}><i className="fa fa-minus" /></button>
                                                                        <input type="text" value={cartItem.quantity} onChange={(e) => onChangeQuantity(e, cartItem.id)} onBlur={(e) => onBlurQuanity(e, cartItem.id)} />
                                                                        <button className="btn-plus" onClick={() => HandleQuanity('increase', cartItem.id)}><i className="fa fa-plus" /></button>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <p style={{ marginBottom: "0" }}>{formatCurrency(cartItem.price * cartItem.quantity)}</p>
                                                                </td>
                                                                <td><button onClick={() => handelRemoveCartItem(cartItem)}><i className="fa fa-trash" /></button></td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cart-page-inner">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="cart-summary">
                                                <div className="cart-content">
                                                    <h1>Cart Summary</h1>
                                                    <p>Sub Total<span>{formatCurrency(cart && cart.totalAmount || 0)}</span></p>
                                                    <p>Shipping<span>{formatCurrency(15000)}</span></p>
                                                    <b>Total<span>{formatCurrency(15000 + (cart && cart.totalAmount || 0))}</span></b>
                                                </div>
                                                <div className="cart-btn">
                                                    <Link to="/"><button>Back to home</button></Link>
                                                    <button>Checkout</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) 
                    :
                    (
                        cart && cart.products.length == 0 ? (
                            <div id="error-page" className="col-md-8 mx-auto text-center">
                                <div className="box" style={{marginBottom:"40px"}}>
                                    <h3>Your cart is empty</h3>
                                    <p>Looks like you have no items in your shopping cart.</p>
                                    <Link to='/' className="btn btn-template-outlined">Go to Home</Link>
                                </div>
                            </div>
                        ):(
                            <div id="error-page" className="col-md-8 mx-auto text-center">
                                <div className="box" style={{marginBottom:"40px"}}>
                                    <h3>Please wait! Your cart is loading...</h3>
                                </div>
                            </div>
                        )
                    )
                }

            </div>
        </div>
    );
}

export default Cart;
