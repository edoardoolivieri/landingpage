import React, { useState, useEffect } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import extract from "lib/utils/extractValue.js"
import moment from 'moment';
import Loading from "lib/components/Loading.jsx";
import InfoMarket from "./InfoMarket"
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, FormControl, Select } from '@material-ui/core';
import _ from "underscore"

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default ({ getSneakersInfo, getSneaker, id, sneakerInfo, sneaker, isLoadedSneakers }) => {

    const [show, setShow] = useState(false)
    const [infoMarket, setInfoMarket] = useState(null)

    useEffect(() => {
        getSneakersInfo(id)
        getSneaker(id)
    }, [id, getSneaker, getSneakersInfo]);

    const handleChange = (event) => {
        const sizeId = event.target.value
        const info = variants[0].find(u => u.size === sizeId)
        setInfoMarket(info)
        setShow(true)
    };

    const classes = useStyles();

    const variants = [extract(["variants"], sneakerInfo) ? extract(["variants"], sneakerInfo) : "No size"]
    const variantSize = (
        <>
            {
                _.map(variants[0], (variant) => (
                    <option value={variant.size} key={variant.uuid}>
                        {variant.size}
                    </option>
                ))
            }
        </>
    )
    const lowestAsk = extract(["market", "lowestAsk"], infoMarket) ? extract(["market", "lowestAsk"], infoMarket) : "N/A"
    const numberOfAsks = extract(["market", "numberOfAsks"], infoMarket) ? extract(["market", "numberOfAsks"], infoMarket) : "N/A"
    const highestBid = extract(["market", "highestBid"], infoMarket) ? extract(["market", "highestBid"], infoMarket) : "N/A"
    const highesnumberOfBids = extract(["market", "numberOfBids"], infoMarket) ? extract(["market", "numberOfBids"], infoMarket) : "N/A"
    const lastSale = extract(["market", "lastSale"], infoMarket) ? extract(["market", "lastSale"], infoMarket) : "N/A"
    const salesLast72Hours = extract(["market", "salesLast72Hours"], infoMarket) ? extract(["market", "salesLast72Hours"], infoMarket) : "N/A"
    const releaseDate = moment(extract([0, "releaseDate"], sneaker)).format("DD MMM, YYYY")
    const retailPrice = extract([0, "retail"], sneaker)
    const stockxLink = `https://stockx.com/${extract([0, "urlKey"], sneaker)}`
    const imgSnk = extract([0, "image"], sneaker)


    return (
        <Container>
            <div className="mt-100"></div>
            {
                !isLoadedSneakers ? <Loading /> :
                    <>
                        <Row>
                            <Col lg={12} md={12} sm={12} xs={12}> <div className="top-info"><p>{sneakerInfo.pid}</p></div></Col>
                        </Row>
                        <Row>
                            <Col lg={7} md={6} sm={12} xs={12}><div className="img-product"><img src={imgSnk} alt="Sneaker" /></div></Col>
                            <Col lg={5} md={6} sm={12} xs={12}>
                                <div className="title-product">
                                    <h1>{sneakerInfo.name}</h1>
                                    <h3>Release Date: <span>{releaseDate}</span></h3>
                                    <h3>Retail price: <span>£{retailPrice}</span></h3>
                                </div>
                                <a rel="noopener noreferrer" target="_blank" href={stockxLink}>
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
                            <Col lg={7} md={7} sm={12} xs={12} className="title-value"><h3 className="float-l">Market Value</h3></Col>
                            <Col lg={5} md={5} sm={12} xs={12} className="select-value">
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel>Size</InputLabel>
                                    <Select
                                        native
                                        value={variantSize.size}
                                        onChange={handleChange}
                                        label="Size"
                                    >
                                        <>
                                            <option aria-label="None" value="" />
                                            {variantSize}
                                        </>
                                    </Select>
                                </FormControl>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                {
                                    show && <InfoMarket
                                        lowestAsk={lowestAsk}
                                        numberOfAsks={numberOfAsks}
                                        highestBid={highestBid}
                                        highesnumberOfBids={highesnumberOfBids}
                                        lastSale={lastSale}
                                        salesLast72Hours={salesLast72Hours}
                                    />
                                }
                            </Col>
                        </Row>
                    </>
            }
        </Container>
    )
}

