import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb(props) {
    return (
        <div className="breadcrumb-wrap">
            <div className="container">
                <ul className="breadcrumb">
                    {
                        props.crumbs.map((crumb, ci) => {
                            return (props.crumbs.length - 1 != ci) ? (
                                <li key={ci} className="breadcrumb-item">
                                    <Link to={crumb.link}>{crumb.label}</Link>
                                </li>
                            )
                            :
                            (
                                <li key={ci} className="breadcrumb-item active">
                                    {crumb.label}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Breadcrumb;