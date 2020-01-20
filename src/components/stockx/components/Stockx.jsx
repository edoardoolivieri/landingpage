import React, { Component } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import Loader from "../../Loader.jsx"
import Navbar from "../../navbar/Navbar.jsx"
import SearchBar from "../../Search-bar.jsx"
import Slider from "../../Slider.jsx"
import Title from "../../Title.jsx"
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
        console.log(this.state.sneakersInfos)
    }

    componentDidMount() {
        this.getSearch()
        this.getSneaker()
        this.getSneakersInfo()
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
        stockX.searchProducts(('dunk'), { limit: 3 })
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

    getSneakersInfo = (sneakersInfos) => {
        stockX.fetchProductDetails('https://stockx.com/nike-dunk-low-off-white-michigan')
            .then((infos) => {
                this.setState({
                    isLoaded: true,
                    sneakersInfos: infos
                })
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    };

    onClick = () => {
        console.log('test')
    }

    render() {
        const { isLoaded, sneakers, sneakersSrc, sneakersInfos } = this.state;
        // console.log(sneakersInfos)
        return (
            <Container >
                <Navbar />
                <Row className="mt-100">
                    <Col lg={12}>
                        <Title title="Top products of the month">
                            <p>testing children props</p>
                        </Title>
                        <Button onClick={this.onClick}>Nike</Button>
                    </Col>
                    <Col>
                        <div className="top-product">
                            {
                                !isLoaded ? <Loader /> :
                                    sneakers.map(sneaker => (
                                        <Sneaker sneaker={sneaker} />
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
                            sneakersSrc ?
                                <Slider items={_.map(sneakersSrc, (sneakersSrc) =>
                                    <SneakerSrc sneakersSrc={sneakersSrc} />)} />
                                : ""
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

const SneakerSrc = ({ sneakersSrc }) => (
    <div className="product" style={{ margin: "50px" }}>
        <Link to={`/stockx/${sneakersSrc.uuid}`}>
            <p>{sneakersSrc.name}</p>
        </Link>
        <img src={sneakersSrc.image} alt="" style={{ width: "150px" }} />
        <p>Release: {moment(sneakersSrc.releaseDate).format("DD MMM, YYYY")}</p>
    </div>
)

export const Sneaker = ({ sneaker }) => (
    <div key={sneaker.uuid} className="product" style={{ margin: "50px" }}>
        {/* <a target="_blank" rel="noopener noreferrer" href={`https://stockx.com/${sneaker.urlKey}`}></a>*/}
        <Link to={`/stockx/${sneaker.uuid}`}>
            <p>{sneaker.name}</p>
        </Link>
        <img src={sneaker.image} alt="" style={{ width: "150px" }} />
        <p>Release: {moment(sneaker.releaseDate).format("DD MMM, YYYY")}</p>
        <p>avarage price : £ {sneaker.market.averageDeadstockPrice}</p>
    </div>
)

export const SneakersInfo = ({ sneakersInfo }) => (
    console.log(sneakersInfo),
    <div>
        sneakersInfo.name
    </div>
)