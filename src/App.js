import React, { Component } from "react"
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./modules/home/Home.jsx";
import Stockx from "./modules/stockx/containers/Stockx";
import StockxSingle from "./modules/stockx/containers/StockxSingle";
export default class App extends Component {
  render() {
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