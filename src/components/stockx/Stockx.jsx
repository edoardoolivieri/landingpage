import React, { Component } from "react"
import { Container } from "react-bootstrap"
import Loading from "../Loading.jsx"
import Navbar from "../navbar/Navbar.jsx"

export default class Home extends Component {
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
        stockX.searchProducts('Nike Offwhite', {
            limit: 3
        })
            .then((products) => {
                console.log(products)
                this.setState({
                    isLoaded: true,
                    sneakers: products
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
        const { error, isLoaded, sneakers } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <Loading />;
        } else {
            return (
                <Container>
                    <Navbar />
                    {sneakers.map(sneaker => (
                        <div>
                            <p>{sneaker.name}</p>
                            <img src={sneaker.image} alt="" style={{ width: "50px" }} />
                            <a href={`https://stockx.com/sell/${sneaker.urlKey}`}>link</a>
                        </div>
                    ))}
                </Container>
            )
        }
    }
}