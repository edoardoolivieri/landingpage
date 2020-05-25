import React from "react"
import { Row, Col, Container } from "react-bootstrap"

export default ({ lowestAsk, numberOfAsks, highestBid, highesnumberOfBids, lastSale, salesLast72Hours }) => {

    return (
        <Container>
            <Row>
                <Col lg={4} md={4} sm={6} xs={6} className="info-market-style"><p>LOWEST ASK: <span>£{lowestAsk}</span></p></Col>
                <Col lg={4} md={4} sm={6} xs={6} className="info-market-style"><p>NUMBER OF ASK: <span>{numberOfAsks}</span></p></Col>
                <Col lg={4} md={4} sm={6} xs={6} className="info-market-style"><p>HIGHEST BID: <span>£{highestBid}</span></p></Col>
                <Col lg={4} md={4} sm={6} xs={6} className="info-market-style"><p>NUMBER OF BIDS: <span>{highesnumberOfBids}</span></p></Col>
                <Col lg={4} md={4} sm={6} xs={6} className="info-market-style"><p>LAST SALE: <span>£{lastSale}</span></p></Col>
                <Col lg={4} md={4} sm={6} xs={6} className="info-market-style"><p>SALE LAST 72 HOURS: <span>{salesLast72Hours}</span></p></Col>
            </Row>
        </Container>
    )
}