import React, { Component } from "react"
import { Container } from "react-bootstrap"
import Loading from "../Loading.jsx"
import Navbar from "../navbar/Navbar.jsx"
import SearchBar from "../Search-bar.jsx";
import moment from 'moment';

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
        const stockxAPI = require('stockx-api');
        const stockX = new stockxAPI();
        stockX.searchProducts('Dunk', {
            limit: 3
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
        const stockxAPI = require('stockx-api');
        const stockX = new stockxAPI();
        stockX.searchProducts((query), {
            q: query,
            rating: 'g',
            limit: 5
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
        console.log(sneakers)
        console.log(sneakersSrc)
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <Loading />;
        } else {
            return (
                <Container >

                    <div className="" style={{ margin: "50px" }}>
                        <Navbar />
                    </div>

                    <h1>Top Product of the month</h1>
                    {sneakers.map(sneaker => (
                        <div className="" style={{margin: "50px"}}>
                            <a target="_blank" rel="noopener noreferrer" href={`https://stockx.com/${sneaker.urlKey}`}>
                                <p>{sneaker.name}</p>
                            </a>
                            <img src={sneaker.image} alt="" style={{ width: "150px" }} />
                            <p>Release: {moment(sneaker.releaseDate).format("DD MMM, YYYY")}</p>
                        </div>
                    ))}

                    <h1>Search your favorite item on Stockx</h1>
                    <SearchBar searchFunction={this.search}/>
                    <div style={{height: "100vh"}}>
                        {
                            sneakersSrc ? sneakersSrc.map(sneaker => (
                                <div>
                                    <p>{sneaker.name}</p>
                                    <img src={sneaker.image} alt="" style={{ width: "50px" }} />
                                    <a target="_blank" rel="noopener noreferrer" href={`https://stockx.com/${sneaker.urlKey}`}>link</a>
                                    <p>Release: {moment(sneaker.releaseDate).format("DD MMM, YYYY")}</p>
                                </div>
                            )) : ""
                        }
                    </div>

                </Container>
            )
        }
    }
}