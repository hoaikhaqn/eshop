import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1
};

function Banner(props) {
    return (
        <Slider className="header-slider normal-slider" {...settings}>
            {
                props.list && props.list.map((item, key) => {
                    return (
                        <div key={key} className="header-slider-item">
                            <Link to="/">
                                <div className="image-background" style={{ backgroundImage: `url(${item.url})`, height: '400px', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                {/* <img src={} alt="Slider Image" /> */}
                            </Link>
                        </div>
                    )
                })
            }
        </Slider>
    );
}

export default Banner;