import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

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
function ProductInfo(props) {
    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)
    const { data } = props;
    console.log(props);

    return (
        <div >
            <div className="product-detail-top">
                <div className="row">
                    <div className="col-md-5">
                        <Slider className="product-slider-single normal-slider"
                            {...SettingsSlider1}
                            asNavFor={nav2}
                            ref={slider => setNav1(slider)}
                        >
                            <img src={data.images && data.images[0]} alt="Product Image" />
                            <img src="https://picsum.photos/300" alt="Product Image" />
                            <img src="https://picsum.photos/300" alt="Product Image" />
                            <img src="https://picsum.photos/300" alt="Product Image" />
                            <img src="https://picsum.photos/300" alt="Product Image" />
                            <img src="https://picsum.photos/300" alt="Product Image" />
                        </Slider>
                        <Slider className="product-slider-single-nav normal-slider"
                            {...SettingsSlider2}
                            asNavFor={nav1}
                            ref={slider => setNav2(slider)}
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
                            <div className="title"><h2>{data.name}</h2></div>
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
        </div>
    )
}

export default ProductInfo;