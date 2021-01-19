import React, { useState, useEffect, useContext } from 'react';
import firebase from '../../firebase';
import { CartContext } from '../../contexts/CartContext';
import { formatCurrency } from '../../utils';

function Cart(props) {
    const { cart, setCart } = useContext(CartContext);
    const onChangeQuantity = (e) => {

    }
    const handelRemoveCartItem = async (cartItem) => {
        let newCart = {...cart};
        newCart.totalQuantity = newCart.totalQuantity - cartItem.quantity;
        newCart.totalAmount = newCart.totalAmount - cartItem.price * cartItem.quantity;

        let indexItem = newCart.products.findIndex(item => item.id == cartItem.id);
        newCart.products.splice(indexItem,1);

        console.log("newCart",newCart);
        setCart(newCart);
        firebase.updateCartItem(newCart);
    }
    return (
        <div className="cart-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="cart-page-inner">
                            <h3><b>Your cart</b> ({cart && cart.totalQuantity || 0} items) </h3>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <tbody className="align-middle">
                                        {
                                            cart && cart.products.map((cartItem, key) => {
                                                return (
                                                    <tr key={key} id={cartItem.id}>
                                                        <td>
                                                            <div className="img">
                                                                <img src={cartItem.image} alt="Image" />
                                                                <div>
                                                                    <b style={{ display: "block", textAlign: "left" }}>{cartItem.name}</b>
                                                                    <p>Size: {cartItem.size} | Color: {cartItem.color}</p>
                                                                </div>

                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p>{formatCurrency(cartItem.price)}</p>
                                                            <span style={{ textDecoration: "line-through" }}>{formatCurrency(cartItem.originPrice)}</span>
                                                        </td>
                                                        <td>
                                                            <div className="qty">
                                                                <button className="btn-minus"><i className="fa fa-minus" /></button>
                                                                <input type="text" value={cartItem.quantity} onChange={onChangeQuantity} />
                                                                <button className="btn-plus"><i className="fa fa-plus" /></button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p>{formatCurrency(cartItem.price * cartItem.quantity)}</p>
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
                                            <p>Sub Total<span>{formatCurrency(1200000)}</span></p>
                                            <p>Shipping<span>{formatCurrency(15000)}</span></p>
                                            <b>Total<span>{formatCurrency(1215000)}</span></b>
                                        </div>
                                        <div className="cart-btn">
                                            <button>Back to home</button>
                                            <button>Checkout</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
