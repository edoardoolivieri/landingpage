import React, { Component } from "react"
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home/Home.jsx"
import Stockx from "./components/stockx/components/Stockx.jsx"
import StockxSingle from "./components/stockx/components/StockxSingle.jsx"
import { SpotifyApiContext } from 'react-spotify-api';
export default class App extends Component {
  render() {
    return (
      <>
        <SpotifyApiContext.Provider>
          <Router>
            <Scroller />
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/stockx" component={Stockx} />
            <Route exact={true} path="/stockx/:id" component={StockxSingle} />
          </Router>
        </SpotifyApiContext.Provider>
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