import React, { Component } from "react"
import { Container, Row } from "react-bootstrap"
import Navbar from "../../navbar/Navbar.jsx"
import {Sneaker} from "./Stockx.jsx"

export default class StockxSingle extends Component {
    render() {
        return (
            <Container>
                <Navbar />
                {/* <Sneaker sneaker={this.state.sneaker} key={this.state.sneaker.uuid}></Sneaker> */}
            </Container>
        )
    }
}
