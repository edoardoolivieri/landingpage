import React, { Component } from "react"
import { Container, Row } from "react-bootstrap"
import Loading from "../Loading.jsx"
import Navbar from "../navbar/Navbar.jsx"
import moment from 'moment';
import Stockx from "./Stockx.jsx"
import { getSneakers } from "./Stockx.jsx"

const stockxAPI = require('stockx-api');
const stockX = new stockxAPI();
export default class StockxSingle extends Component {



    // constructor(props) {
    //     super(props);
    //     this.state.sneakers = props.sneakers|| null;
    //   }

    // componentDidMount = () => {
    //     // const { uuid } = this.props.match.params
    //     let url = `https://stockx.com/${this.sneaker.urlKey}`
    //     console.log(url)

    //     stockX.fetchProductDetails(url)
    //     .then(product => console.log(product),
    //         (error) => {
    //             this.setState({
    //                 isLoaded: true,
    //                 error
    //             });
    //         }
    //     )

    // }
    // componentDidMount() {
    //     this.getSneakers();
    // }

    render() {
        // const {sneakers} = this.props
        // const {id} = this.state
        // console.log(id)
        // // const { sneakers } = this.state
        // console.log(sneakers)
        const {sneakers } = this.props
        console.log(sneakers)
        return (
            <Container >
                <Navbar />
                {/* <h1 key={id}>{sneakers.name}</h1> */}
                <div>
                    The data from parent is:{sneakers}
                </div>
            </Container>
        )
    }
}
