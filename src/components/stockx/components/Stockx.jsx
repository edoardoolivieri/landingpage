import React, { Component } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import Loader from "../../Loader.jsx"
import Navbar from "../../navbar/Navbar.jsx"
import SearchBar from "../../Search-bar.jsx"
import Slider from "../../Slider.jsx"
import moment from 'moment';
import { Link } from 'react-router-dom'
import _ from "underscore"

const stockxAPI = require('stockx-api');
const stockX = new stockxAPI();
export default class Stockx extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            sneakers: [],
            sneakersInfos: [],
        };
    }

    componentDidMount() {
        this.getSearch()
        this.getSneaker()
    }

    getSearch = (query) => {
        stockX.searchProducts((query), {
            q: query,
            limit: 20,
            currency: 'GBP'
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

    getSneaker = (sneakers) => {
        stockX.searchProducts(('Jordan 1'), { limit: 3 })
            .then((data) => {
                this.setState({
                    isLoaded: true,
                    sneakers: data
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
        const { isLoaded, sneakers, sneakersSrc } = this.state;
        return (
            <Container >
                <Navbar />
                <Row className="mt-100">
                    <Col lg={12}>
                        <h1>Top products of the month</h1>
                        <p>testing children props</p>
                    </Col>
                    <Col>
                        <div className="top-product">
                            {
                                !isLoaded ? <Loader /> :
                                    sneakers.map(sneaker => (
                                        <Sneaker sneaker={sneaker} key={sneaker.uuid} />
                                    ))
                            }
                        </div>
                    </Col>
                </Row>
                <Row className="mt-100">
                    <h3>Search your favorite item on Stockx</h3>
                </Row>
                <Row>
                    <Col lg={12}>
                        <SearchBar searchFunction={this.getSearch} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {
                            sneakersSrc &&
                            <Slider items={_.map(sneakersSrc, (sneakersSrc) =>
                                <SneakerSrc sneakersSrc={sneakersSrc} />)} />
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

const SneakerSrc = ({ sneakersSrc }) => (
    <div className="product" style={{ margin: "50px" }}>
        <Link to={`/stockx/${sneakersSrc.urlKey}`}>
            <p>{sneakersSrc.name}</p>
        </Link>
        <img src={sneakersSrc.image} alt="" style={{ width: "150px" }} />
        <p>Release: {moment(sneakersSrc.releaseDate).format("DD MMM, YYYY")}</p>
    </div>
)

const Sneaker = ({ sneaker }) => (
    <div className="product" style={{ margin: "50px" }}>
        <Link to={`/stockx/${sneaker.urlKey}`}>
            <p>{sneaker.name}</p>
        </Link>
        <img src={sneaker.image} alt="" style={{ width: "150px" }} />
        <p>Release: {moment(sneaker.releaseDate).format("DD MMM, YYYY")}</p>
        <p>avarage price : £ {sneaker.market.averageDeadstockPrice}</p>
    </div>
)
