import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
function Breadcrumb(props) {
    const {crumbs} = props;
    return (
        <div className="breadcrumb-wrap">
            <div className="container">
                <ul className="breadcrumb">
                    {
                        crumbs && crumbs.map((crumb, ci) => {
                            return (crumbs.length - 1 != ci) ? (
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
                        }) || <Skeleton width={200}/>

                    }
                </ul>
            </div>
        </div>
    );
}

export default Breadcrumb;