import React, {useState} from 'react';
import { Prompt } from 'react-router-dom';
import { useForm } from "react-hook-form";
import firebase from "../../firebase.js";

import './style.scss';
function Register(props) {
    const [submited,setSubmited] = useState(false)
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = async data => {
        setSubmited(true);
        let profile = await firebase.signUp(data);
        console.log(profile);
        setSubmited(false);
    };
    
    return (
        <div className="login">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-6">
                        <div className="login-form">
                            <h2 className="heading">Register</h2>
                            <form id="frmRegister" className="form-validate" onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-12 form-group">
                                        <label>Username</label>
                                        <input name="username" type="text"
                                            className={`form-control ${errors && errors.username ? 'is-invalid' : ''}`}
                                            ref={register({ required: "This field is required" })} />
                                        {errors.username && <span className="msg-err">{errors.username.message}</span>}
                                    </div>
                                    <div className="col-12 form-group">
                                        <label>E-mail</label>
                                        <input name="email" type="text"
                                            className={`form-control ${errors && errors.email ? 'is-invalid' : ''}`}
                                            ref={register({
                                                required: "This field is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email"
                                                }
                                            })} />
                                        {errors.email && <span className="msg-err">{errors.email.message}</span>}
                                    </div>
                                    <div className="col-12 col-md-6 form-group">
                                        <label>Password</label>
                                        <input name="password" type="password"
                                            className={`form-control ${errors && errors.password ? 'is-invalid' : ''}`}
                                            ref={register({
                                                required: "This field is required",
                                                minLength: {
                                                    value: 6,
                                                    message: "Password must be at least 6 character"
                                                }
                                            })} />
                                        {errors.password && <span className="msg-err">{errors.password.message}</span>}
                                    </div>
                                    <div className="col-12 col-md-6 form-group">
                                        <label>Re password</label>
                                        <input name="re_password" type="password"
                                            className={`form-control ${errors && errors.re_password ? 'is-invalid' : ''}`}
                                            ref={register({
                                                required: "This field is required",
                                                validate: value =>
                                                    value === watch("password") || "The passwords do not match"
                                            })} />
                                        {errors.re_password && <span className="msg-err">{errors.re_password.message}</span>}
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-register" type="submit" disabled={submited}>Register</button>
                                    </div>
                                </div>
                            </form>
                            <Prompt
                                when={Object.keys(watch()).length > 0}
                                message='Are you sure you want to leave ?'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;