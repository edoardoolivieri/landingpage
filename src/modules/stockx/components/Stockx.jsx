import React, { useState, useEffect } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import Loading from "../../../lib/components/Loading.jsx"
import Navbar from "../../navbar/Navbar.jsx"
import SearchBar from "../../../lib/components/Search-bar.jsx"
import SpotifyPlayer from 'react-spotify-web-playback';
// import Slider from "../../../lib/components/Slider.jsx"
import { stockX } from "../../../redux/actions/app"
import moment from 'moment';
import { Link } from 'react-router-dom'
import _ from "underscore"

export default ({ topSneakers, isLoadedSneakers }) => {

    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [sneakersSrc, setSneakersSrc] = useState([])
    const [limitList, setLimitList] = useState(9)

    useEffect(() => {
        getSearchSneakers()
    }, []);

    const getSearchSneakers = (query) => {
        stockX.searchProducts((query), {
            q: query,
        })
            .then(
                (products) => { setIsLoaded(true); setSneakersSrc(products) },
                (error) => { setIsLoaded(true); setError(error) }
            )
    }


    return (
        <>
            <Container >
                <Navbar />
                <Row className="mt-100">
                    <Col lg={12}>
                        <h1>Top products of the month</h1>
                        <p>Click a sneaker to check the market info</p>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <Row className="top-product">
                            {
                                !isLoadedSneakers ? <Loading /> :
                                    topSneakers.map(sneaker => (
                                        <Col lg={4} md={6} sm={12} xs={12}><Sneaker sneaker={sneaker} key={sneaker.uuid} id={sneaker.urlKey} /></Col>
                                    ))
                            }
                        </Row>
                    </Col>
                </Row>
                <Row className="mt-100"><Col lg={12}><h3>Search your favorite item</h3></Col></Row>
                <Row className="pt-16">
                    <Col lg={12}>
                        <SearchBar searchFunction={getSearchSneakers} />
                    </Col>
                </Row>
                <Row>
                    {
                        !isLoaded ? <Loading /> :
                            sneakersSrc.slice(0, limitList).map(sneakersSrc => (
                                <Col lg={4} md={6} sm={12} xs={12}><SneakerSrc sneakersSrc={sneakersSrc} key={sneakersSrc.uuid} id={sneakersSrc.uuid} /></Col>
                            ))
                    }
                </Row>
                <Row>
                    <Col className="button-loadmore">
                        {sneakersSrc.length === 0 ? "" : <Button className="btn-stockx" onClick={() => { setLimitList(limitList + 9) }}>Load More</Button>}
                    </Col>
                </Row>
                <Row>
                </Row>
                <SpotifyPlayer
                    token="BQBIMHpyJ65wW3gD_utmveXCxR5mXj6FvGxSxjsETIEYnLQ83k-JwIJAy7dBoCasi4x77RGSE527Hcok-91bBMIksrVvXVK97fDvKhpOBJcMDMEOgW7BtwM4Di9EXDnfGTZs-BXPDrQreyL1lW6bSu91oBvjL42-kEcl_KYSduDYgdMKs4ccx7RpACph"
                    uris={['spotify:album:6HQYnRM4OzToCYPpVBInuU']}
                />
            </Container>
        </>
    )
}


const SneakerSrc = ({ sneakersSrc, id }) => (
    <Link to={`/stockx/${id}`} className="click-card">
        <div className="product-sneaker-search product">
            <img src={sneakersSrc.image} alt="" />
            <h4>{sneakersSrc.name}</h4>
            <div className="short-info">
                <p>{moment(sneakersSrc.releaseDate).format("DD MMM, YYYY")}</p>
                <p>£ {sneakersSrc.market.averageDeadstockPrice}+</p>
            </div>
        </div>
    </Link>
)

const Sneaker = ({ sneaker, id }) => (
    <Link to={`/stockx/${id}`} className="click-card">
        <div className="product">
            <h4>{sneaker.name}</h4>
            <img src={sneaker.image} alt="" />
            <p>Release: {moment(sneaker.releaseDate).format("DD MMM, YYYY")}</p>
            <p>avarage price : £ {sneaker.market.averageDeadstockPrice}</p>
        </div>
    </Link>
)
