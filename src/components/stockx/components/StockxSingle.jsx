import React, { Component } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import Navbar from "../../navbar/Navbar.jsx"
import extract from "../../lib/extractValue.js"
import moment from 'moment';
// import Loader from "../../Loader.jsx";
// import Loading from "../../Loading.jsx";
import _ from "underscore"

const stockxAPI = require('stockx-api');
const stockX = new stockxAPI();
export default class StockxSingle extends Component {
    constructor(props) {
        super();
        this.state = {
            sneakerInfo: {},
            sneaker: [],
            error: null,
            isLoaded: false,
        }
        const id = extract(["match", "params", "id"], props)
        if (id) {
            this.getsneakersInfo(id)
            this.getSneaker(id)
        }
    }
    getsneakersInfo = (sneakerInfo) => {
        stockX.fetchProductDetails(`https://stockx.com/${sneakerInfo}`)
            .then((infos) => {
                this.setState({
                    isLoaded: true,
                    sneakerInfo: infos
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


    getSneaker = (sneakerInfo) => {
        stockX.searchProducts(sneakerInfo, { limit: 1 })
            .then((data) => {
                this.setState({
                    isLoaded: true,
                    sneaker: data
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


    onClick = (variant) => {
        
        console.log(variant)
        // const variants = [extract(["variants"], sneakerInfo) ? extract(["variants"], sneakerInfo) : "No Info"]
        // console.log(variants[0].size)
    }

    render() {
        const { sneakerInfo, sneaker, isLoaded } = this.state
        console.log(sneakerInfo)
        const variants = [extract(["variants"], sneakerInfo) ? extract(["variants"], sneakerInfo) : "No size"]
        return (
            <Container>
                <Navbar />
                <div className="mt-100"></div>
                <Row className="mt-100">
                    <Col lg={7}>
                        <div className="img-product">
                            <img src={extract([0, "image"], sneaker)} alt="Sneaker" />
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="title-product">
                            <h1>{sneakerInfo.name}</h1>
                            <div>
                                <h3>Release Date: </h3><p>{moment(extract([0, "releaseDate"], sneaker)).format("DD MMM, YYYY")}</p>
                            </div>
                        </div>
                        <a rel="noopener noreferrer" target="_blank" href={`https://stockx.com/${extract([0, "urlKey"], sneaker)}`}>
                            <Button>
                                <p>StockX</p>
                                <img src="" alt="" />
                            </Button>
                        </a>
                    </Col>

                </Row>
                <Row>
                    {
                        _.map(variants[0], variant => (
                                 <button value={variant} onClick={() => this.onClick(variant)}>{variant.size}</button>
                        ))
                    }
                </Row>
            </Container>
        )
    }
}
