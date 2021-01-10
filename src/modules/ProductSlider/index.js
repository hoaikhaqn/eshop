import React, { Component } from 'react';
import Slider from "react-slick";
import ProductItem from '../ProductItem';

const productArray = ['1', '1', '1', '1', '1', '1', '1', '1'];
const SliderSettings = {
    autoplay: true,
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
}
class ProductSlider extends Component {
    render() {
        return (
            <div className="product product-slider" >
                <div className="section-header">
                    <h1>{this.props.heading}</h1>
                </div>
                <Slider className="row align-items-center product-slider" {...SliderSettings}>
                    {
                        productArray.map((el, key) => {
                            return (
                                <div key={key} className="col-12">
                                    <ProductItem />
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        );
    }
}

export default ProductSlider;