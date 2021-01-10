import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

class Header extends Component {

    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <nav className="navbar bg-light">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/category/c/1"><i className="fa fa-shopping-bag"></i>Best Selling</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/category/c/1"><i className="fa fa-plus-square"></i>New Arrivals</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/category/c/1"><i className="fa fa-female"></i>Fashion & Beauty</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/category/c/1"><i className="fa fa-child"></i>Kids & Babies Clothes</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/category/c/1"><i className="fa fa-tshirt"></i>Men & Women Clothes</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/category/c/1"><i className="fa fa-mobile-alt"></i>Gadgets & Accessories</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/category/c/1"><i className="fa fa-microchip"></i>Electronics & Accessories</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-8">
                            <Slider className="header-slider normal-slider" {...settings}>
                                <div className="header-slider-item">
                                    <a href="#">
                                        <img src="https://picsum.photos/1360/357" alt="Slider Image" />
                                    </a>
                                </div>
                                <div className="header-slider-item">
                                    <a href="#">
                                        <img src="https://picsum.photos/1360/357" alt="Slider Image" />
                                    </a>
                                </div>
                                <div className="header-slider-item">
                                    <a href="#">
                                        <img src="https://picsum.photos/1360/357" alt="Slider Image" />
                                    </a>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;