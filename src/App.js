import React, { Component } from "react"
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home/Home.jsx"
import Stockx from "./components/stockx/components/Stockx.jsx"
import StockxSingle from "./components/stockx/components/StockxSingle.jsx"
// import { Provider } from 'react-redux'
// import { createStore } from "redux";
// import createStore from './createReduxStore'

// const store = createStore()
const stockxAPI = require('stockx-api');
const stockX = new stockxAPI();
export default class App extends Component {
  render() {
    return (
      <>
          <Router>
            <Scroller/>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/stockx" component={Stockx}/>
            <Route exact={true} path="/stockx/:id" component={StockxSingle} />
          </Router>
      </>
    )
  }

}

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
      if (
          this.props.location.pathname !== prevProps.location.pathname
      ) {
          window.scrollTo(0, 0);
      }
  }

  render() {
      return null;
  }
}
const Scroller = withRouter(ScrollToTop);