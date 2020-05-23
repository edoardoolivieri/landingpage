import React, { useRef } from "react"
import { BrowserRouter as Router, Route, withRouter, useLocation } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import Home from "../../modules/home/Home.jsx";
import Stockx from "../../modules/stockx/containers/Stockx";
import StockxSingle from "../../modules/stockx/containers/StockxSingle";
import { useEffect } from "react";


export default ({ init }) => {

  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <Router>
        <Scroller />
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/stockx" component={Stockx} />
        <Route exact={true} path="/stockx/:id" component={StockxSingle} />
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