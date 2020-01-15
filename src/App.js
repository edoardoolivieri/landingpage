import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home/Home.jsx"
import Stockx from "./components/stockx/components/Stockx.jsx"
import StockxSingle from "./components/stockx/components/StockxSingle.jsx"

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/stockx" component={Stockx}/>
          <Route exact={true} path="/stockx/:id" component={StockxSingle} />
        </Router>
      </>
    )
  }

}