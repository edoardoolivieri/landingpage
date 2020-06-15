import React from "react"
import moment from 'moment';
import { Link } from 'react-router-dom'
import _ from "underscore"

export default ({ sneakersSrc, id }) => {
    return (
        <Link to={`/stockx/${id}`} className="click-card">
            <div className="product-sneaker-search product">
                <img src={sneakersSrc.image} alt="" />
                <h4>{sneakersSrc.name}</h4>
                <div className="short-info">
                    <p>{moment(sneakersSrc.releaseDate).format("DD MMM, YYYY")}</p>
                    <p>£ {sneakersSrc.market.averageDeadstockPrice}+</p>
                </div>
            </div>
        </Link>
    )
}