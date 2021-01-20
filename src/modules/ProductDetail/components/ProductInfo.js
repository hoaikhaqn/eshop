import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import Skeleton from 'react-loading-skeleton';
import { formatCurrency } from '../../../utils';


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
    infinite: false,
    dots: false,
    focusOnSelect: true
};
function ProductInfo(props) {
    const { data } = props;
    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState()
    const [size, setSize] = useState()

    const onChangeQuanity = (e) => {
        let regex = new RegExp(/[1-9]\d*/g);
        if (e.target.value == '' || regex.test(e.target.value)) {
            setQuantity(e.target.value != '' ? Number(e.target.value) : '')
        }
    }
    const onBlurQuanity = () => {
        if (quantity == '') {
            setQuantity(1)
        }
    }
    const HandleQuanity = (action) => {
        if (action == 'increase') {
            setQuantity(quantity + 1)
        }
        if (action == 'decrease' && quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    const onChangeSize = (e) => {
        setSize(e.target.value)
    }
    const onChangeColor = (e) => {
        setColor(e.target.value)
    }

    const handleAddToCart = () => {
        props.addCartItem({
            id: data.id,
            code: `${data.id}${color}${size}`,
            name: data.name,
            image: data.images && data.images[0] || '',
            price: data.discount,
            originPrice: data.price,
            color: color || null,
            size: size || null,
            quantity,
        })
    }

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
                            {
                                data.images && data.images.map((image, key) => {
                                    return <img key={key} src={image} alt="Product Image" />
                                }) || <Skeleton width={350} height={350} />
                            }
                        </Slider>
                        <Slider className="product-slider-single-nav normal-slider"
                            {...SettingsSlider2}
                            asNavFor={nav1}
                            ref={slider => setNav2(slider)}
                        >
                            {
                                data.images && data.images.map((image, key) => {
                                    return <img key={key} src={image} alt="Product Image" />
                                }) || <Skeleton width={70} height={70} />
                            }
                        </Slider>
                    </div>
                    <div className="col-md-7">
                        <div className="product-content">
                            <div className="title"><h2>{data.name || <Skeleton width={200} />}</h2></div>
                            <div className="price">
                                <h4>Price:</h4>
                                <p>{data.discount && formatCurrency(data.discount) || <Skeleton width={150} />}<span>{data.price && formatCurrency(data.price) || <Skeleton width={150} />}</span></p>
                            </div>
                            <div className="quantity">
                                <h4>Quantity:</h4>
                                <div className="qty">
                                    <button onClick={() => HandleQuanity("decrease")} className="btn-minus"><i className="fa fa-minus" /></button>
                                    <input type="text" onBlur={() => onBlurQuanity()} onChange={(e) => onChangeQuanity(e)} value={quantity} name="sampleInput" />
                                    <button onClick={() => HandleQuanity("increase")} className="btn-plus"><i className="fa fa-plus" /></button>
                                </div>
                            </div>
                            {
                                data.size && (
                                    <div className="p-size">
                                        <h4>Size:</h4>
                                        <div className="btn-group btn-group-sm">
                                            {
                                                data.size.map((item, key) => {
                                                    return (
                                                        <div className="control-group radio-custom" key={key}>
                                                            <input type="radio" onChange={onChangeSize} value={item} id={`size-${key}`} name="size" />
                                                            <label className="check-mark" htmlFor={`size-${key}`}>{item}</label>
                                                        </div>)
                                                }) || <Skeleton width={150} />
                                            }
                                        </div>
                                    </div>
                                )
                            }
                            {
                                data.color && (<div className="p-color">
                                    <h4>Color:</h4>
                                    <div className="btn-group btn-group-sm">
                                        {
                                            data.color.map((item, key) => {
                                                return (
                                                    <div className="control-group radio-custom" key={key}>
                                                        <input type="radio" onChange={onChangeColor} value={item} id={`color-${key}`} name="color" />
                                                        <label className="check-mark" htmlFor={`color-${key}`}>{item}</label>
                                                    </div>)
                                            }) || <Skeleton width={150} />
                                        }
                                    </div>
                                </div>)
                            }
                            <div className="action">
                                <a className="btn" onClick={() => handleAddToCart()}><i className="fa fa-shopping-cart" />Add to Cart</a>
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
                        {/* <li className="nav-item">
                            <a className="nav-link" data-toggle="pill" href="#specification">Specification</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="pill" href="#reviews">Reviews (1)</a>
                        </li> */}
                    </ul>
                    <div className="tab-content">
                        <div id="description" className="container tab-pane active">
                            {data.description || <Skeleton count={5} />}
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