import React, { useRef, useState } from "react"
import { BrowserRouter as Router, Route, Switch, withRouter, useLocation } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import Home from "../../modules/home/Home.jsx";
import Stockx from "../../modules/stockx/containers/Stockx";
import StockxSingle from "../../modules/stockx/containers/StockxSingle";
import Navbar from "../../lib/components/navbar/containers/Navbar"
import Footer from "../../lib/components/footer/Footer"
import SignIn from "../../modules/auth/Login"
import SignUp from "../../modules/auth/Register"
import { useEffect } from "react";
import { setCurrentUser } from "../actions/app"
import { auth, createUserProfileDocument } from "../../lib/utils/firebase"


export default ({ init, setCurrentUser }) => {
  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);
        (await userRef).onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)
    })
    init()
  }, [init])


  return (
    <>
      <Router>
        <Navbar />
        <Scroller />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/stockx" component={Stockx} />
          <Route exact={true} path="/stockx/:id" component={StockxSingle} />

          <Route exact={true} path="/signin" component={SignIn} />
          <Route exact={true} path="/signup" component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}


function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export const ScrollToTopController = () => {
  let location = useLocation();
  const pathname = location.pathname
  const prevCountRef = usePrevious(pathname);
  useEffect(() => {
    if (pathname !== prevCountRef) {
      window.scrollTo(0, 0);
    }
  });
  return null;
};


const Scroller = withRouter(ScrollToTopController)