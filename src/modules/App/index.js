import React, { useState, useEffect, Component } from 'react';
import { BrowserRouter as Router, IndexRoute, Switch, Route, Link } from "react-router-dom";
import * as firebase from "../../firebase";

import routes from '../../constants/routes';
import Header from '../Header';
import Footer from '../Footer';
import '../../assets/styles/style.css';

function App(props) {

  firebase.default.getDataCollection("users").then((data)=>{
    console.log("App",data);
  });


  return (
    <Router>
      <Header />
      <Switch>
        {
          routes.map((route, index) => {
            return <Route key={index} path={route.path} exact={route.exact} component={route.main} />
          })
        }
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
