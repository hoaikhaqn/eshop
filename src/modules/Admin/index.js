import React, { useState, useEffect,useContext } from 'react';
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import firebase from '../../firebase';
import { RoutesAmin } from '../../constants/routes';
import {AuthContext} from '../../contexts/AuthContext';

export default function Admin(props) {
    const history = useHistory();
    const { auth, setAuth } = useContext(AuthContext);

    const AdminPages = () => {
        return RoutesAmin.map((route, index) => {
            if (route.defaultLayout)
                return <Route key={index} path={route.path} exact={route.exact} component={props => route.main(props)} />
        })
    }

    if(!props.auth){
        return <Redirect to="/"/>
    }

    return (
        <div>
            <h1>HEADER</h1>
            <Switch>
                <AdminPages />
            </Switch>
            <h1>Footer</h1>
        </div>
    )
}
