import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

function Banner(props) {
    return (
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
    );
}

export default Banner;