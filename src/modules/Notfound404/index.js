import React, { Component } from 'react';

class Notfound404 extends Component {
    render() {
        return (
            <div id="content">
                <div className="container">
                    <div id="error-page" className="col-md-8 mx-auto text-center">
                        <div className="box">
                            <h3>We are sorry - this page is not here anymore</h3>
                            <h4 className="text-muted">Error 404 - Page not found</h4>
                            <p className="buttons"><a href="/" className="btn btn-template-outlined"><i className="fa fa-home"></i> Go to Homepage</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Notfound404;