import React from "react"
import moment from 'moment';
import { Link } from 'react-router-dom'
import _ from "underscore"

export default ({ sneaker, id }) => {
    return (
        <Link to={`/stockx/${id}`} className="click-card">
            <div className="product">
                <h4>{sneaker.name}</h4>
                <img src={sneaker.image} alt="" />
                <p>Release: {moment(sneaker.releaseDate).format("DD MMM, YYYY")}</p>
                <p>avarage price : £ {sneaker.market.averageDeadstockPrice}</p>
            </div>
        </Link>
    )
}