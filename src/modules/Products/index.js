import React from 'react';
import Breadcrumb from '../Breadcrumb';
import ProductList from './components/ProductList';
import * as firebase from "../../firebase";

function Products(props) {
    const crumbs = [{link:"/",label:"Home"},{label: "Category name"}];
    firebase.default.getDataCollection("users").then((data) => {
        console.log("Products",data);
      });
    return (
        <div>
            <Breadcrumb crumbs={crumbs} />
            <div className="product-view">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="product-view-top">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="product-search">
                                            <input type="email" defaultValue="Search" />
                                            <button><i className="fa fa-search" /></button>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="product-short">
                                            <div className="dropdown">
                                                <div className="dropdown-toggle" data-toggle="dropdown">Product short by</div>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="#" className="dropdown-item">Newest</a>
                                                    <a href="#" className="dropdown-item">Popular</a>
                                                    <a href="#" className="dropdown-item">Most sale</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="product-price-range">
                                            <div className="dropdown">
                                                <div className="dropdown-toggle" data-toggle="dropdown">Product price range</div>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="#" className="dropdown-item">$0 to $50</a>
                                                    <a href="#" className="dropdown-item">$51 to $100</a>
                                                    <a href="#" className="dropdown-item">$101 to $150</a>
                                                    <a href="#" className="dropdown-item">$151 to $200</a>
                                                    <a href="#" className="dropdown-item">$201 to $250</a>
                                                    <a href="#" className="dropdown-item">$251 to $300</a>
                                                    <a href="#" className="dropdown-item">$301 to $350</a>
                                                    <a href="#" className="dropdown-item">$351 to $400</a>
                                                    <a href="#" className="dropdown-item">$401 to $450</a>
                                                    <a href="#" className="dropdown-item">$451 to $500</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ProductList />
                        </div>
                        {/* Side Bar Start */}
                        <div className="col-lg-3 sidebar">
                            <div className="sidebar-widget category">
                                <h2 className="title">Category</h2>
                                <nav className="navbar bg-light">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><i className="fa fa-female" />Fashion &amp; Beauty</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><i className="fa fa-child" />Kids &amp; Babies Clothes</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><i className="fa fa-tshirt" />Men &amp; Women Clothes</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><i className="fa fa-mobile-alt" />Gadgets &amp; Accessories</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><i className="fa fa-microchip" />Electronics &amp; Accessories</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="sidebar-widget brands">
                                <h2 className="title">Our Brands</h2>
                                <ul>
                                    <li><a href="#">Nulla </a><span>(45)</span></li>
                                    <li><a href="#">Curabitur </a><span>(34)</span></li>
                                    <li><a href="#">Nunc </a><span>(67)</span></li>
                                    <li><a href="#">Ullamcorper</a><span>(74)</span></li>
                                    <li><a href="#">Fusce </a><span>(89)</span></li>
                                    <li><a href="#">Sagittis</a><span>(28)</span></li>
                                </ul>
                            </div>
                            <div className="sidebar-widget tag">
                                <h2 className="title">Tags Cloud</h2>
                                <a href="#">Lorem ipsum</a>
                                <a href="#">Vivamus</a>
                                <a href="#">Phasellus</a>
                                <a href="#">pulvinar</a>
                                <a href="#">Curabitur</a>
                                <a href="#">Fusce</a>
                                <a href="#">Sem quis</a>
                                <a href="#">Mollis metus</a>
                                <a href="#">Sit amet</a>
                                <a href="#">Vel posuere</a>
                                <a href="#">orci luctus</a>
                                <a href="#">Nam lorem</a>
                            </div>
                        </div>
                        {/* Side Bar End */}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Products;