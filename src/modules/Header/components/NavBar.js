import React, { useState, useEffect,useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import { getUserProfile, removeUserProfile } from '../../../constants/auth.js';
import firebase from "../../../firebase.js";
import { setAccessToken,authenticate } from '../../../constants/auth';
import { AuthContext } from '../../../contexts/AuthContext';

function NavBar(props) {
  const history = useHistory();
  const {auth,setAuth} = useContext(AuthContext);

  useEffect(() => {
    firebase.onAuthChanged(setAuth)
  }, [])
  
  useEffect(async () => {
    if (auth.username) {
      setAuth(auth);
      setAccessToken(auth.accessToken);
      authenticate(auth);
    }
  }, [auth]);

  const logOut = async () => {
    await firebase.signOut();
    removeUserProfile();
    history.push("/login");
  }

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
              {/* <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">More Pages</a>
                <div className="dropdown-menu">
                  <a href="wishlist.html" className="dropdown-item">Wishlist</a>
                  <a href="login.html" className="dropdown-item">Login & Register</a>
                  <a href="contact.html" className="dropdown-item">Contact Us</a>
                </div>
              </div> */}
            </div>
            <div className="navbar-nav ml-auto">
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">{auth.username ? `Hi, ${auth.username}` : 'User Account'}</a>
                <div className="dropdown-menu">
                  {!auth.username ? <Link to="/login" className="dropdown-item">Login</Link> : ''}
                  {!auth.username ? <Link to="/register" className="dropdown-item">Register</Link> : ''}
                  {auth.username ? <a className="dropdown-item" onClick={() => logOut()}>Logout</a> : ''}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
