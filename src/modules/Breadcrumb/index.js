import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
function Breadcrumb(props) {
    
    return (
        <div className="breadcrumb-wrap">
            <div className="container">
                {
                    props.crumbs.length > 0 ? (
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
                    ) :
                        <Skeleton width={500} />
                }
            </div>
        </div>
    );
}

export default Breadcrumb;