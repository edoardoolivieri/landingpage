import React, { Component } from "react"
import { Container, Row } from "react-bootstrap"
import Navbar from "../../navbar/Navbar.jsx"
import extract from "../../lib/extractValue.js"

const stockxAPI = require('stockx-api');
const stockX = new stockxAPI();
export default class StockxSingle extends Component {

    constructor(props){
        super();
        this.state = {
            sneakersInfos : {},
        }
        const id = extract(["match", "params", "id"], props)
        if (id){
            this.getSneakersInfo(id)
        }
    }

    getSneakersInfo = (sneakersInfos) => {
        stockX.fetchProductDetails(`https://stockx.com/${sneakersInfos}`)
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

    render() {
        const { sneakersInfos } = this.state
        return (
            <Container>
                <Navbar />
                <Row className="mt-100">
                    <h1>{sneakersInfos.name}</h1>
                </Row>
            </Container>
        )
    }
}
