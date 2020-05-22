import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Loading from "../../../lib/components/Loading.jsx"
import Navbar from "../../navbar/Navbar.jsx"
import SearchBar from "../../../lib/components/Search-bar.jsx"
import Slider from "../../../lib/components/Slider.jsx"
import { stockX } from "../../../redux/actions/app"
import moment from 'moment';
import { Link } from 'react-router-dom'
import { getSneakersInfo } from "../../../redux/actions/app"
import _ from "underscore"

export default ({ topSneakers, isLoadedSneakers }) => {

    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [sneakersSrc, setSneakersSrc] = useState([])

    useEffect(() => {
        getSearchSneakers()
    }, []);

    const getSearchSneakers = (query) => {
        stockX.searchProducts((query), {
            q: query,
            limit: 10,
        })
            .then(
                (products) => { setIsLoaded(true); setSneakersSrc(products) },
                (error) => { setIsLoaded(true); setError(error) }
            )
    }

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
                            !isLoadedSneakers ? <Loading /> :
                                topSneakers.map(sneaker => (
                                    <Sneaker sneaker={sneaker} key={sneaker.uuid} id={sneaker.urlKey} />
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
                    <SearchBar searchFunction={getSearchSneakers} />
                </Col>
            </Row>
            <Row>
                <Col>
                    {
                        !isLoaded ? <Loading /> :
                            <Slider items={_.map(sneakersSrc, (sneakersSrc) =>
                                <SneakerSrc sneakersSrc={sneakersSrc} key={sneakersSrc.uuid} />)} />
                    }
                </Col>
            </Row>
        </Container>
    )
}


const SneakerSrc = ({ sneakersSrc }) => (
    <div className="product" style={{ margin: "50px" }}>
        <Link to={`/stockx/${sneakersSrc.urlKey}`}>
            <p>{sneakersSrc.name}</p>
        </Link>
        <img src={sneakersSrc.image} alt="" style={{ width: "150px" }} />
        <p>Release: {moment(sneakersSrc.releaseDate).format("DD MMM, YYYY")}</p>
        <p>avarage price : £ {sneakersSrc.market.averageDeadstockPrice}</p>
    </div>
)

const Sneaker = ({ sneaker, id }) => (
    <div className="product" style={{ margin: "50px" }}>
        <Link to={`/stockx/${id}`}>
            <button onClick={() => getSneakersInfo(id)}>
                <p>{sneaker.name}</p>
            </button>
        </Link>
        <img src={sneaker.image} alt="" style={{ width: "150px" }} />
        <p>Release: {moment(sneaker.releaseDate).format("DD MMM, YYYY")}</p>
        <p>avarage price : £ {sneaker.market.averageDeadstockPrice}</p>
    </div>
)
