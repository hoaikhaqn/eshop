import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import firebase from "../../firebase.js";
import Loading from "../Loading";
import routes from '../../constants/routes';
import Header from '../Header';
import Footer from '../Footer';

import "slick-carousel/slick/slick-theme.scss";
import "slick-carousel/slick/slick.scss";

import '../../assets/styles/all.scss';
function App(props) {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false)

  useEffect(() => {
    firebase.isInitialized().then(val => setFirebaseInitialized(val))
  })

  return firebaseInitialized !== false ? (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Switch>
        {
          routes.map((route, index) => {
            return <Route key={index} path={route.path} exact={route.exact} component={props => route.main(props)} />
          })
        }
      </Switch>
      <Footer />
    </Router>
  ) : <Loading />
}

export default App;
