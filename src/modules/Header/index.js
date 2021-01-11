import React, { Component } from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo.png';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';

class Header extends Component {
    render() {
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
                                        <img src={`${logo}`} alt="Logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="search">
                                    <input type="text" placeholder="Search" />
                                    <button><i className="fa fa-search"></i></button>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="user">
                                    <a href="wishlist.html" className="btn wishlist">
                                        <i className="fa fa-heart"></i>
                                        <span>(0)</span>
                                    </a>
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
}

export default Header;