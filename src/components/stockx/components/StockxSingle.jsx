import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Navbar from "../../navbar/Navbar.jsx"
import extract from "../../lib/extractValue.js"
import Loader from "../../Loader.jsx";
import Loading from "../../Loading.jsx";

const stockxAPI = require('stockx-api');
const stockX = new stockxAPI();

const imgStyle = { width: "100%" };
const cardStyle = { width: 500 }
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

    render() {
        const { sneakerInfo, sneaker, isLoaded } = this.state
        console.log(sneakerInfo)
        const variants = [extract(["variants"], sneakerInfo) ? extract(["variants"], sneakerInfo) : "No size"]
        console.log(variants)
        return (
            <Container>
                <Navbar />
                <div className="mt-100"></div>
                {
                    !isLoaded ? <Loader /> :
                        <Row className="mt-100">
                            <Col lg={12}>
                                <h1>{sneakerInfo.name}</h1>
                            </Col>
                            <Col lg={12}>
                                <div style={cardStyle}>
                                    <img src={extract([0, "image"], sneaker)} alt="Sneaker" style={imgStyle} />
                                </div>
                            </Col>

                        </Row>
                }
                {
                    !isLoaded ? <Loading /> :
                        variants.map(variant => (
                            <li><ul>{variant.size}</ul></li>
                        ))
                }
            </Container>
        )
    }
}
