import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Navbar from "../../navbar/Navbar.jsx"
import SearchBar from "../../../lib/components/Search-bar.jsx"
import Slider from "../../../lib/components/Slider.jsx"
import moment from 'moment';
import { Link } from 'react-router-dom'
import {
    getSearchSneakers,
    getSneakers
} from "../../../redux/actions/app.js"
import _ from "underscore"

export default class Stockx extends Component {

    componentDidMount(){
        getSneakers()
    }

    render() {
        // State from Redux
        const { topSneakers, sneakersSrc } = this.props
        console.log(sneakersSrc)
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
                        <SearchBar searchFunction={() => { getSearchSneakers() }} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {
                            sneakersSrc &&
                            <Slider items={_.map(sneakersSrc, (sneakersSrc) =>
                                <SneakerSrc sneakersSrc={sneakersSrc} key={sneakersSrc.uuid} />)} />
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
