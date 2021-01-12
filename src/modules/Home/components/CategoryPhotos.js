import React from 'react';
import { Link } from 'react-router-dom';

function CategoryPhotos(props) {

    return (
        <div className="category">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        {
                            props.list[0] ? (

                                <div className="category-item ch-400">
                                    <img src={props.list[0].image} />
                                    <Link className="category-name" to={`/category/${props.list[0].slug}/${props.list[0].id}`}>
                                        <p>{props.list[0].name}</p>
                                    </Link>

                                </div>
                            ) : null
                        }
                    </div>
                    <div className="col-md-3">
                        {
                            props.list[1] ? (
                                <div className="category-item ch-250">
                                    <img src={props.list[1].image} />
                                    <Link className="category-name" to={`/category/${props.list[1].slug}/${props.list[1].id}`}>
                                        <p>{props.list[1].name}</p>
                                    </Link>
                                </div>
                            ) : null
                        }
                        {
                            props.list[2] ? (
                                <div className="category-item ch-150">
                                    <img src={props.list[2].image} />
                                    <Link className="category-name" to={`/category/${props.list[2].slug}/${props.list[2].id}`}>
                                        <p>{props.list[2].name}</p>
                                    </Link>
                                </div>
                            ) : null
                        }
                    </div>
                    <div className="col-md-3">
                        {
                            props.list[3] ? (
                                <div className="category-item ch-150">
                                    <img src={props.list[3].image} />
                                    <Link className="category-name" to={`/category/${props.list[3].slug}/${props.list[3].id}`}>
                                        <p>{props.list[3].name}</p>
                                    </Link>
                                </div>
                            ) : null
                        }
                        {
                            props.list[4] ? (
                                <div className="category-item ch-250">
                                    <img src={props.list[4].image} />
                                    <Link className="category-name" to={`/category/${props.list[4].slug}/${props.list[4].id}`}>
                                        <p>{props.list[4].name}</p>
                                    </Link>
                                </div>
                            ) : null
                        }
                    </div>
                    <div className="col-md-3">
                        {
                            props.list[5] ? (
                                <div className="category-item ch-400">
                                    <img src={props.list[5].image} />
                                    <Link className="category-name" to={`/category/${props.list[5].slug}/${props.list[5].id}`}>
                                        <p>{props.list[5].name}</p>
                                    </Link>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryPhotos;