import React, { Component } from "react"
import { Container, Row } from "react-bootstrap"
import Loading from "../Loading.jsx"
import Navbar from "../navbar/Navbar.jsx"
import SearchBar from "../Search-bar.jsx";
import moment from 'moment';

const stockxAPI = require('stockx-api');
const stockX = new stockxAPI();
export default class Stockx extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            sneakers: []
        };
    }

    componentDidMount() {
        stockX.searchProducts('Dunk', {
            limit: 3,
            currency: 'USD'
        })
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

    search = (query) => {
        stockX.searchProducts((query), {
            q: query,
            rating: 'g',
            limit: 3,
            currency: 'USD'
        })
            .then((products) => {
                this.setState({
                    isLoaded: true,
                    sneakersSrc: products
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
        const { error, isLoaded, sneakers, sneakersSrc } = this.state;
        return (
            <Container >
                <Navbar />
                <Row className="mt-100">
                    <h3>Top Product of the month</h3>
                    <div className="top-product">
                        {
                            !isLoaded ? <Loading /> :
                                sneakers.map(sneaker => (
                                    <div className="product" style={{ margin: "50px" }}>
                                        <a target="_blank" rel="noopener noreferrer" href={`https://stockx.com/${sneaker.urlKey}`}>
                                            <p>{sneaker.name}</p>
                                        </a>
                                        <img src={sneaker.image} alt="" style={{ width: "150px" }} />
                                        <p>Release: {moment(sneaker.releaseDate).format("DD MMM, YYYY")}</p>
                                    </div>
                                ))
                        }
                    </div>
                </Row>
                <h3>Search your favorite item on Stockx</h3>
                <SearchBar searchFunction={this.search} />
                <div className="top-product">
                    {
                        sneakersSrc ? sneakersSrc.map(sneaker => (
                            <div className="product" style={{ margin: "50px" }}>
                                <a target="_blank" rel="noopener noreferrer" href={`https://stockx.com/${sneaker.urlKey}`}>
                                    <p>{sneaker.name}</p>
                                </a>
                                <img src={sneaker.image} alt="" style={{ width: "150px" }} />
                                <p>Release: {moment(sneaker.releaseDate).format("DD MMM, YYYY")}</p>
                            </div>
                        )) : ""
                    }
                </div>

            </Container>
        )
    }
}
