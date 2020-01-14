import React, { Component } from "react"
import { Container, Row } from "react-bootstrap"
import Loading from "../Loading.jsx"
import Navbar from "../navbar/Navbar.jsx"
import moment from 'moment';

const stockxAPI = require('stockx-api');
const stockX = new stockxAPI();
export default class StockxSingle extends Component {
    state = {
        loading: true,
        sneaker: '',
        id: this.props.match.params.uuid
        
    }
    

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

    render() {
        const {id} = this.state
        console.log(id)
        return (
            <Container >
                <Navbar />
                
            </Container>
        )
    }
}
