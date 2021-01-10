import React, { Component } from 'react';

class Category extends Component {
    render() {
        return (
            <div className="category">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="category-item ch-400">
                                <img src="https://picsum.photos/400/250" />
                                <a className="category-name" href="#">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="category-item ch-250">
                                <img src="https://picsum.photos/400/250" />
                                <a className="category-name" href="#">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                            <div className="category-item ch-150">
                                <img src="https://picsum.photos/400/250" />
                                <a className="category-name" href="#">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="category-item ch-150">
                                <img src="https://picsum.photos/400/250" />
                                <a className="category-name" href="#">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                            <div className="category-item ch-250">
                                <img src="https://picsum.photos/400/250" />
                                <a className="category-name" href="#">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="category-item ch-400">
                                <img src="https://picsum.photos/400/250" />
                                <a className="category-name" href="#">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;