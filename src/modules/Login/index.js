import React from 'react';

function Login(props) {
    return (
        <div className="login">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-4">
                        <div className="login-form">
                            <h2 className="heading">Login</h2>
                            <div className="row">
                                <div className="col-md-12">
                                    <label>E-mail / Username</label>
                                    <input className="form-control" type="text" placeholder="E-mail / Username" />
                                </div>
                                <div className="col-md-12">
                                    <label>Password</label>
                                    <input className="form-control" type="text" placeholder="Password" />
                                </div>
                                <div className="col-md-12">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="newaccount" />
                                        <label className="custom-control-label" htmlFor="newaccount">Keep me signed in</label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <button className="btn">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;