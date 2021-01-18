import React, { useState, useEffect, useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar.js';
import {AuthContext} from '../../contexts/AuthContext';
import {KeywordContext} from '../../contexts/KeywordContext';
import {CartContext} from '../../contexts/CartContext';
import firebase from '../../firebase';

function Header(props) {
    const history = useHistory();
    const { register, handleSubmit, setValue } = useForm();
    const { auth } = useContext(AuthContext);
    const { keyword, setKeyword } = useContext(KeywordContext);
    const { cart, setCart } = useContext(CartContext);
    
    const onSearch = data => {
        if (data) {
            setKeyword(data.keyword);
            history.push(`/search/${decodeURI(data.keyword)}`)
        }
    }

    useEffect(()=>{
        setValue('keyword',keyword)
    },[keyword])

    useEffect(()=>{
        (async function fetchData(){
            if(!cart && auth.userId){
                const res = await firebase.getCartByUserId(auth.userId);
                console.log("cart db: ",res);
                if(res.status){
                    setCart(res.result);
                }else{
                    setCart({
                        userId:auth.userId,
                        products:[],
                        totalQuantity:0
                    });
                }
            }
        })()
    },[auth])


    return (
        <header id="header">
            <TopBar />
            <NavBar />
            <div className="bottom-bar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <div className="logo">
                                <Link to="/">
                                    <img src={`./${logo}`} alt="Logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="search">
                                <form onSubmit={handleSubmit(onSearch)}>
                                    <input name="keyword" type="text" defaultValue={keyword || ''} placeholder="Search..." ref={register} />
                                    <button type="submit"><i className="fa fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="user">
                                <a href="cart.html" className="btn cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>({cart && cart.totalQuantity || 0})</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;