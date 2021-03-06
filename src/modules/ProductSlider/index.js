import React, { Component } from 'react';
import Slider from "react-slick";
import ProductItem from '../ProductItem';
import Skeleton from 'react-loading-skeleton';

const SliderSettings = {
    autoplay: true,
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
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

function ProductSlider(props) {
    return (
        <div className="product product-slider" >
            <div className="section-header">
                <h1>{props.heading}</h1>
            </div>
            <div className="slider-wrapper" style={{overflow:"hidden"}}>
                {
                    props.list ?
                        <Slider className="row align-items-center product-slider" {...SliderSettings}>
                            {props.list.map((product, key) => {
                                return (
                                    <div key={key} className="col-12">
                                        <ProductItem data={product} />
                                    </div>
                                )
                            })
                            }
                        </Slider>
                        : <Skeleton height={400} />
                }
            </div>
        </div>
    );
}

export default ProductSlider;
