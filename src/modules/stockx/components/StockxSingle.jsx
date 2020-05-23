import React, { useState, useEffect } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import Navbar from "../../navbar/Navbar.jsx"
import extract from "../../..//lib/utils/extractValue.js"
import moment from 'moment';
import Loading from "../../../lib/components/Loading.jsx";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
    const [state, setState] = useState({
        size: '',
    });

    useEffect(() => {
        getSneakersInfo(id)
        getSneaker(id)
    }, [id, getSneaker, getSneakersInfo]);

    const onClick = (variant) => {
        setShow(true)
        setInfoMarket(variant)
    }

    const handleChange = (event, variant) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
        onClick(console.log(variant))
    };

    const classes = useStyles();

    const variants = [extract(["variants"], sneakerInfo) ? extract(["variants"], sneakerInfo) : "No size"]
    const lowestAsk = extract(["market", "lowestAsk"], infoMarket) ? extract(["market", "lowestAsk"], infoMarket) : "N/A"
    const numberOfAsks = extract(["market", "numberOfAsks"], infoMarket) ? extract(["market", "numberOfAsks"], infoMarket) : "N/A"
    const highestBid = extract(["market", "highestBid"], infoMarket) ? extract(["market", "highestBid"], infoMarket) : "N/A"
    const highesnumberOfBids = extract(["market", "numberOfBids"], infoMarket) ? extract(["market", "numberOfBids"], infoMarket) : "N/A"
    const lastSale = extract(["market", "lastSale"], infoMarket) ? extract(["market", "lastSale"], infoMarket) : "N/A"
    const salesLast72Hours = extract(["market", "salesLast72Hours"], infoMarket) ? extract(["market", "salesLast72Hours"], infoMarket) : "N/A"
    const releaseDate = moment(extract([0, "releaseDate"], sneaker)).format("DD MMM, YYYY")
    const retailPrice = extract([0, "retail"], sneaker)
    const stockxLink = `https://stockx.com/${extract([0, "urlKey"], sneaker)}`
    return (
        <Container>
            <Navbar />
            <div className="mt-100"></div>
            {
                !isLoadedSneakers ? <Loading /> :
                    <>
                        <Row>
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <div className="top-info">
                                    <p>{sneakerInfo.pid}</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={7} md={6} sm={12} xs={12}>
                                <div className="img-product">
                                    <img src={extract([0, "image"], sneaker)} alt="Sneaker" />
                                </div>
                            </Col>
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
                        <Row><Col className="title-value"><h3>Market Value</h3></Col></Row>
                        <Row>
                            <Col lg={12}>
                                <p>US size: </p>
                                {
                                    _.map(variants[0], (variant) => (
                                        <>
                                            <Button key={variant.uuid} className="size-btn" variant={variant} onClick={() => { onClick(variant) }}>{variant.size}</Button>
                                        </>
                                    ))
                                }
                            </Col>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel htmlFor="outlined-size-native-simple">Size</InputLabel>
                                <Select
                                    native
                                    value={state.size}
                                    onChange={handleChange}
                                    label="Size"
                                    inputProps={{ name: 'size', id: 'outlined-size-native-simple', }}
                                >
                                    <>
                                        <option aria-label="None" value="" />
                                        {
                                            _.map(variants[0], (variant) => (

                                                <option key={variant.uuid} variant={variant} onClick={() => { handleChange(variant) }} >{variant.size}</option>

                                            ))
                                        }
                                    </>
                                </Select>
                            </FormControl>
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
                    </>
            }
        </Container>
    )
}

