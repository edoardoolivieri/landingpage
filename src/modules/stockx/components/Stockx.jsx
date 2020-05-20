import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Loader from "../../../lib/components/Loader.jsx"
import Navbar from "../../navbar/Navbar.jsx"
import SearchBar from "../../../lib/components/Search-bar.jsx"
import Slider from "../../../lib/components/Slider.jsx"
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
            topSneakers: [],
            sneakersSrc: [],
        };
    }

    componentDidMount() {
        this.getSneakers()
        this.getSearchSneakers()
    }

    getSearchSneakers = (query) => {
        stockX.searchProducts((query), {
            q: query,
            limit: 10,
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

    async getSneakers() {
        try {
            const resp = await stockX.searchProducts(('SB'), { limit: 3 })
            this.setState({
                isLoaded: true,
                topSneakers: resp
            })
        }
        catch (error) {
            this.setState({
                isLoaded: false,
                error
            })
        }

    }

    render() {
        const { isLoaded, topSneakers, sneakersSrc } = this.state;
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
                                    topSneakers.map(sneaker => (
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
                        <SearchBar searchFunction={this.getSearchSneakers} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {
                            sneakersSrc &&
                            <Slider items={_.map(sneakersSrc, (sneakersSrc) =>
                                <SneakerSrc sneakersSrc={sneakersSrc} key={sneakersSrc.uuid}/>)} />
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
