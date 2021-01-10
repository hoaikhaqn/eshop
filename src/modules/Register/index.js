import React from 'react';

function Login(props) {
    return (
        <div className="login">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-4">
                        <div className="register-form">
                            <h2 className="heading">Register</h2>
                            <div className="row">
                                <div className="col-md-12">
                                    <label>Username</label>
                                    <input className="form-control" type="text" placeholder="First Name" />
                                </div>
                                <div className="col-md-12">
                                    <label>E-mail</label>
                                    <input className="form-control" type="text" placeholder="E-mail" />
                                </div>
                                <div className="col-md-6">
                                    <label>Password</label>
                                    <input className="form-control" type="password" placeholder="Password" />
                                </div>
                                <div className="col-md-6">
                                    <label>Re-Password</label>
                                    <input className="form-control" type="password" placeholder="Password" />
                                </div>
                                <div className="col-md-12">
                                    <button className="btn">Register</button>
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