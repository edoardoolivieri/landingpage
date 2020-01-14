import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home/Home.jsx"
import Stockx from "./components/stockx/Stockx.jsx"
import StockxSingle from "./components/stockx/StockxSingle.jsx"

const stockxAPI = require('stockx-api');
const stockX = new stockxAPI();
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      sneakers: []
    };
  }

  componentDidMount() {
    stockX.searchProducts('Dunk', { limit: 3 })
      .then((result) => {
        this.setState({
          isLoaded: true,
          sneakers: result
        })
      },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    return (
      <>
        <Router>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/stockx" component={Stockx} />
          <Route exact={true} path="/stockx/:id" component={StockxSingle} />
        </Router>
      </>
    )
  }

}