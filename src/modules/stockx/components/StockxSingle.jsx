import React, { Component } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import Navbar from "../../navbar/Navbar.jsx"
import extract from "../../..//lib/utils/extractValue.js"
import moment from 'moment';
// import { stockX } from "../../../redux/actions/app"
import { getSneaker, getSneakersInfo } from "../../../redux/actions/app"
import _ from "underscore"
import Loading from "../../../lib/components/Loading.jsx";

export default class StockxSingle extends Component {
    constructor(props) {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            show: false,
            infoMarket: null
        }
        const id = extract(["match", "params", "id"], props)
        if (id) {
            getSneakersInfo(id)
            // getSneaker(id)
        }
    }

    // getsneakersInfo = (sneakerInfo) => {
    //     stockX.fetchProductDetails(`https://stockx.com/${sneakerInfo}`)
    //         .then((infos) => {
    //             this.setState({
    //                 isLoaded: true,
    //                 sneakerInfo: infos
    //             })
    //         },
    //             (error) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     error
    //                 });
    //             }
    //         )
    // };

    // getSneaker = (sneakerInfo) => {
    //     stockX.searchProducts(sneakerInfo, { limit: 1 })
    //         .then((data) => {
    //             this.setState({
    //                 isLoaded: true,
    //                 sneaker: data
    //             })
    //         },
    //             (error) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     error
    //                 });
    //             }
    //         )
    // };

    onClick = (variant) => {
        this.setState({
            show: true,
            infoMarket: variant
        })
    }

    render() {
        const { show, infoMarket } = this.state
        const { sneakerInfo, sneaker } = this.props
        const variants = [extract(["variants"], sneakerInfo) ? extract(["variants"], sneakerInfo) : "No size"]
        const lowestAsk = extract(["market", "lowestAsk"], infoMarket) ? extract(["market", "lowestAsk"], infoMarket) : "N/A"
        const numberOfAsks = extract(["market", "numberOfAsks"], infoMarket) ? extract(["market", "numberOfAsks"], infoMarket) : "N/A"
        const highestBid = extract(["market", "highestBid"], infoMarket) ? extract(["market", "highestBid"], infoMarket) : "N/A"
        const highesnumberOfBids = extract(["market", "numberOfBids"], infoMarket) ? extract(["market", "numberOfBids"], infoMarket) : "N/A"
        const lastSale = extract(["market", "lastSale"], infoMarket) ? extract(["market", "lastSale"], infoMarket) : "N/A"
        const salesLast72Hours = extract(["market", "salesLast72Hours"], infoMarket) ? extract(["market", "salesLast72Hours"], infoMarket) : "N/A"
        return (
            <Container>
                <Navbar />
                <div className="mt-100"></div>
                <Row>
                    <Col lg={12}>
                        <div className="top-info">
                            <p>{sneakerInfo.pid}</p>
                        </div>
                    </Col>
                </Row>
                <Row className="">
                    <Col lg={7}>
                        <div className="img-product">
                            <img src={extract([0, "image"], sneaker)} alt="Sneaker" />
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="title-product">
                            <h1>{sneakerInfo.name}</h1>
                            <h3>Release Date: <span>{moment(extract([0, "releaseDate"], sneaker)).format("DD MMM, YYYY")}</span></h3>
                            <h3>Retail price: <span>£{extract([0, "retail"], sneaker)}</span></h3>
                        </div>
                        <a rel="noopener noreferrer" target="_blank" href={`https://stockx.com/${extract([0, "urlKey"], sneaker)}`}>
                            <Button className="btn-stockx">
                                <div className="d-flex center">
                                    <p>StockX</p>
                                    <i className="fas fa-arrow-circle-right" />
                                </div>
                            </Button>
                        </a>
                    </Col>

                </Row>
                <Row>
                    <Col className="title-value">
                        <h3>Market Value</h3>
                    </Col>
                </Row>
                <Row>
                    <p>US size: </p>
                    {
                        _.map(variants[0], (variant) => (
                            <>
                                <button key={variant.uuid} className="size-btn" variant={variant} onClick={() => this.onClick(variant)}>{variant.size}</button>
                            </>
                        ))
                    }
                </Row>
                <Row>
                    <Col>
                        {
                            show &&
                            <div>
                                <p>lowestAsk: £{lowestAsk}</p>
                                <p>numberOfAsk: {numberOfAsks}</p>
                                <p>highestBid: £{highestBid}</p>
                                <p>numberOfBid: {highesnumberOfBids}</p>
                                <p>lastSale: £{lastSale}</p>
                                <p>saleLast72Hours: {salesLast72Hours}</p>
                            </div>
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}
