import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar.js';

function Header(props) {
    const history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();

    const onSearch = data => {
        if (data.keyword) {
            history.push(`/search/${decodeURI(data.keyword)}`)
        }
    }

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
                                    <input name="keyword" type="text" defaultValue={props.match && props.match.params.keyword || ''} placeholder="Search..." ref={register} />
                                    <button type="submit"><i className="fa fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="user">
                                <a href="cart.html" className="btn cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>(0)</span>
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