import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, IndexRoute, Switch, Route, Link } from "react-router-dom";
import firebase from "../../firebase.js";
import Loading from "../Loading";
import routes from '../../constants/routes';
import Header from '../Header';
import Footer from '../Footer';

import '../../assets/styles/all.scss';
function App(props) {
  const [firebaseInitialized,setFirebaseInitialized] = useState(false)

  useEffect(()=>{
    firebase.isInitialized().then(val=>setFirebaseInitialized(val))
  })

  return firebaseInitialized !== false ? (
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
  ): <Loading />
}

export default App;
