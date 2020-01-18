import React, { Component } from "react"
import { Container, Row } from "react-bootstrap"
import Navbar from "../../navbar/Navbar.jsx"
import {SneakersInfos} from "./Stockx.jsx"

export default class StockxSingle extends Component {
    render() {
        return (
            <Container>
                <Navbar />
                <SneakersInfos getSneakersInfo={this.getSneakersInfo} ></SneakersInfos>
            </Container>
        )
    }
}
