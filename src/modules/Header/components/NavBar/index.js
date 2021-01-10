import React, { Component } from 'react';
import {Link} from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="container">
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <a href="#" className="navbar-brand">MENU</a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav mr-auto">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/products" className="nav-item nav-link">Products</Link>
                <a href="product-detail.html" className="nav-item nav-link">Product Detail</a>
                <a href="cart.html" className="nav-item nav-link">Cart</a>
                <a href="checkout.html" className="nav-item nav-link">Checkout</a>
                <a href="my-account.html" className="nav-item nav-link">My Account</a>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">More Pages</a>
                  <div className="dropdown-menu">
                    <a href="wishlist.html" className="dropdown-item">Wishlist</a>
                    <a href="login.html" className="dropdown-item">Login & Register</a>
                    <a href="contact.html" className="dropdown-item">Contact Us</a>
                  </div>
                </div>
              </div>
              <div className="navbar-nav ml-auto">
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">User Account</a>
                  <div className="dropdown-menu">
                    <Link to="/login" className="dropdown-item">Login</Link>
                    <Link to="/register" className="dropdown-item">Register</Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;