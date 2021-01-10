import React, { Component } from 'react';
import Slider from "react-slick";
import Breadcrumb from '../Breadcrumb';
import ProductSlider from '../ProductSlider';

const crumbs = [{ link: "/", label: "Home" }, { link: "/category/a/1", label: "Category name" }, { label: "Product name" }];
const SettingsSlider1 = {
    dots: false,
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1
};
const SettingsSlider2 = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true
};

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    render() {
        return (
            <div>
                <Breadcrumb crumbs={crumbs} />
                <div className="product-detail">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="product-detail-top">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <Slider className="product-slider-single normal-slider"
                                                {...SettingsSlider1}
                                                asNavFor={this.state.nav2}
                                                ref={slider => (this.slider1 = slider)}
                                            >
                                                <img src="https://picsum.photos/300" alt="Product Image" />
                                                <img src="https://picsum.photos/300" alt="Product Image" />
                                                <img src="https://picsum.photos/300" alt="Product Image" />
                                                <img src="https://picsum.photos/300" alt="Product Image" />
                                                <img src="https://picsum.photos/300" alt="Product Image" />
                                                <img src="https://picsum.photos/300" alt="Product Image" />
                                            </Slider>
                                            <Slider className="product-slider-single-nav normal-slider"
                                                {...SettingsSlider2}
                                                asNavFor={this.state.nav1}
                                                ref={slider => (this.slider2 = slider)}
                                            >
                                                <img src="https://picsum.photos/300" alt="Product Image" />
                                                <img src="https://picsum.photos/300" alt="Product Image" />
                                                <img src="https://picsum.photos/300" alt="Product Image" />
                                                <img src="https://picsum.photos/300" alt="Product Image" />
                                                <img src="https://picsum.photos/300" alt="Product Image" />
                                            </Slider>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="product-content">
                                                <div className="title"><h2>Product Name</h2></div>
                                                <div className="ratting">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                                <div className="price">
                                                    <h4>Price:</h4>
                                                    <p>$99 <span>$149</span></p>
                                                </div>
                                                <div className="quantity">
                                                    <h4>Quantity:</h4>
                                                    <div className="qty">
                                                        <button className="btn-minus"><i className="fa fa-minus" /></button>
                                                        <input type="text" defaultValue={1} />
                                                        <button className="btn-plus"><i className="fa fa-plus" /></button>
                                                    </div>
                                                </div>
                                                <div className="p-size">
                                                    <h4>Size:</h4>
                                                    <div className="btn-group btn-group-sm">
                                                        <button type="button" className="btn">S</button>
                                                        <button type="button" className="btn">M</button>
                                                        <button type="button" className="btn">L</button>
                                                        <button type="button" className="btn">XL</button>
                                                    </div>
                                                </div>
                                                <div className="p-color">
                                                    <h4>Color:</h4>
                                                    <div className="btn-group btn-group-sm">
                                                        <button type="button" className="btn">White</button>
                                                        <button type="button" className="btn">Black</button>
                                                        <button type="button" className="btn">Blue</button>
                                                    </div>
                                                </div>
                                                <div className="action">
                                                    <a className="btn" href="#"><i className="fa fa-shopping-cart" />Add to Cart</a>
                                                    <a className="btn" href="#"><i className="fa fa-shopping-bag" />Buy Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row product-detail-bottom">
                                    <div className="col-lg-12">
                                        <ul className="nav nav-pills nav-justified">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-toggle="pill" href="#description">Description</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="pill" href="#specification">Specification</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="pill" href="#reviews">Reviews (1)</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div id="description" className="container tab-pane active">
                                                <h4>Product description</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum quam ac mi viverra dictum. In efficitur ipsum diam, at dignissim lorem tempor in. Vivamus tempor hendrerit finibus. Nulla tristique viverra nisl, sit amet bibendum ante suscipit non. Praesent in faucibus tellus, sed gravida lacus. Vivamus eu diam eros. Aliquam et sapien eget arcu rhoncus scelerisque. Suspendisse sit amet neque neque. Praesent suscipit et magna eu iaculis. Donec arcu libero, commodo ac est a, malesuada finibus dolor. Aenean in ex eu velit semper fermentum. In leo dui, aliquet sit amet eleifend sit amet, varius in turpis. Maecenas fermentum ut ligula at consectetur. Nullam et tortor leo.</p>
                                            </div>
                                            <div id="specification" className="container tab-pane fade">
                                                <h4>Product specification</h4>
                                                <ul>
                                                    <li>Lorem ipsum dolor sit amet</li>
                                                    <li>Lorem ipsum dolor sit amet</li>
                                                    <li>Lorem ipsum dolor sit amet</li>
                                                    <li>Lorem ipsum dolor sit amet</li>
                                                    <li>Lorem ipsum dolor sit amet</li>
                                                </ul>
                                            </div>
                                            <div id="reviews" className="container tab-pane fade">
                                                <div className="reviews-submitted">
                                                    <div className="reviewer">Phasellus Gravida - <span>01 Jan 2020</span></div>
                                                    <div className="ratting">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. </p>
                                                </div>
                                                <div className="reviews-submit">
                                                    <h4>Give your Review:</h4>
                                                    <div className="ratting">
                                                        <i className="far fa-star" />
                                                        <i className="far fa-star" />
                                                        <i className="far fa-star" />
                                                        <i className="far fa-star" />
                                                        <i className="far fa-star" />
                                                    </div>
                                                    <div className="row form">
                                                        <div className="col-sm-6">
                                                            <input type="text" placeholder="Name" />
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <input type="email" placeholder="Email" />
                                                        </div>
                                                        <div className="col-sm-12">
                                                            <textarea placeholder="Review" defaultValue={""} />
                                                        </div>
                                                        <div className="col-sm-12">
                                                            <button>Submit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="related-products">
                                    <ProductSlider heading="Related Products" />
                                </div>
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
}

export default ProductDetail;