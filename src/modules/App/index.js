import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import firebase from "../../firebase.js";
import Loading from "../Loading";
import {RoutesUser,RoutesAmin} from '../../constants/routes';
import Header from '../Header';
import Footer from '../Footer';
import AdminLayout from '../Admin';
import { AuthProvider } from '../../contexts/AuthContext';
import { KeywordProvider } from '../../contexts/KeywordContext';
import { CartProvider } from '../../contexts/CartContext';

import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick-theme.scss";
import "slick-carousel/slick/slick.scss";
import '../../assets/styles/all.scss';
function App(props) {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false)

  useEffect(() => {
    firebase.isInitialized().then(val => setFirebaseInitialized(val))
  },[])

  const RenderMainPages = () =>{
    return RoutesUser.map((route, index) => {
      return <Route key={index} path={route.path} exact={route.exact} component={props => route.main(props)} />
    })
  }

  const RenderAdminPages = () =>{
    return RoutesAmin.map((route, index) => {
      if(!route.defaultLayout)
      return <Route key={index} path={route.path} exact component={props => route.main(props)} />
    })
  }

  return firebaseInitialized !== false ? (
    <AuthProvider>
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path="/admin/:path?">
                <Switch>
                  {RenderAdminPages()}
                  <AdminLayout auth={!!firebaseInitialized}/>
                </Switch>
              </Route>
              <Route>
                <CartProvider >
                  <KeywordProvider>
                    <Header />
                    <Switch>
                      {RenderMainPages()}
                    </Switch>
                    <Footer />
                  </KeywordProvider>
                </CartProvider>
              </Route>
            </Switch>
            <ToastContainer 
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </Router>
    </AuthProvider>
  ) : <Loading />
}

export default App;
