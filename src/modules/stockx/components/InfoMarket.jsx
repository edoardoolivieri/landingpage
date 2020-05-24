import React from "react"
import { Row, Col } from "react-bootstrap"

export default ({ lowestAsk, numberOfAsks, highestBid, highesnumberOfBids, lastSale, salesLast72Hours }) => {

    return (
        <>
            <Row>
                <Col lg={2} md={4} sm={6} xs={6}><p>lowestAsk: £{lowestAsk}</p></Col>
                <Col lg={2} md={4} sm={6} xs={6}><p>numberOfAsk: {numberOfAsks}</p></Col>
                <Col lg={2} md={4} sm={6} xs={6}><p>highestBid: £{highestBid}</p></Col>
                <Col lg={2} md={4} sm={6} xs={6}><p>numberOfBid: {highesnumberOfBids}</p></Col>
                <Col lg={2} md={4} sm={6} xs={6}><p>lastSale: £{lastSale}</p></Col>
                <Col lg={2} md={4} sm={6} xs={6}><p>saleLast72Hours: {salesLast72Hours}</p></Col>
            </Row>
        </>
    )
}