import React, { Component } from "react"
import { Container, Row } from "react-bootstrap"
import Navbar from "../../navbar/Navbar.jsx"

export default class StockxSingle extends Component {
    render() {
        const {sneakers} = this.props
        console.log(sneakers)
        return (
            <Container >
                {/* <Navbar /> */}
                <div className="mt-100">
                    
                </div>
            </Container>
        )
    }
}
