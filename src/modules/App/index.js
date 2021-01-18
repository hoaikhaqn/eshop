import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import firebase from "../../firebase.js";
import Loading from "../Loading";
import routes from '../../constants/routes';
import Header from '../Header';
import Footer from '../Footer';
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
  })

  return firebaseInitialized !== false ? (
    <AuthProvider>
      <CartProvider >
        <KeywordProvider>
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
        </KeywordProvider>
      </CartProvider>
    </AuthProvider>
  ) : <Loading />
}

export default App;
