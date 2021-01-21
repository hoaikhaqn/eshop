import React, { useState, useContext } from 'react';
import { Prompt, Link, Redirect, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import firebase from "../../firebase.js";
import {AuthContext} from "../../contexts/AuthContext";
import './style.scss';

export default function Login(props) {
    const history = useHistory();
    const {auth} = useContext(AuthContext);
    const [submited, setSubmited] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = async data => {
        setSubmited(true);
        let res = await firebase.signIn(data);
        if (res.status) {
            history.push('/');
        } else {
            alert("Đăng nhập thất bại: " + res.errMsg)
            setSubmited(false);
        }
    };

    if (auth && auth.userId) {
        return (
            <Redirect to="/" />
        )
    }

    return (
        <div className="login">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-6">
                        <div className="login-form">
                            <h2 className="heading">Login</h2>
                            <form id="frmLogin" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label>E-mail</label>
                                    <input name="email" className={`form-control ${errors && errors.email ? 'is-invalid' : ''}`} type="text" ref={register({ required: true })} />
                                    {errors.email && <span className="msg-err">This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input name="password" className={`form-control ${errors && errors.password ? 'is-invalid' : ''}`} type="password" ref={register({ required: true })} />
                                    {errors.password && <span className="msg-err">This field is required</span>}
                                </div>
                                <div style={{ marginBottom: "1rem" }}>
                                    <Link to="/register">Don't have an account yet?</Link>
                                </div>
                                <button className="btn btn-register" type="submit" disabled={submited}>
                                    {submited ? <span className="loading-button"><span className="spinner-border spinner-border-sm"></span>Loading...</span> : 'Login'}
                                </button>
                            </form>
                            <Prompt
                                when={Object.keys(watch()).length > 0 && !submited}
                                message='Are you sure you want to leave ?'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
