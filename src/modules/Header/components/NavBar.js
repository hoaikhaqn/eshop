import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../contexts/AuthContext';

function NavBar(props) {
  const {auth} = useContext(AuthContext);

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
              <Link to="/contact" className="nav-item nav-link">Contact Us</Link>
            </div>
            <div className="navbar-nav ml-auto">
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">{auth && auth.username ? `Hi, ${ auth.username}` : 'User Account'}</a>
                <div className="dropdown-menu">
                  {!auth ? <Link to="/login" className="dropdown-item">Login</Link> : ''}
                  {!auth ? <Link to="/register" className="dropdown-item">Register</Link> : ''}
                  {auth ? <a className="dropdown-item" onClick={() => props.handleLogOut()}>Logout</a> : ''}
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
