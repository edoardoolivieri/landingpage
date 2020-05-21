import actions from "./names"
import { NotificationManager } from "react-notifications";

const stockxAPI = require('stockx-api');
const stockX = new stockxAPI({
    // proxy: 'pr.blankpremium.co.uk:7777:customer-2L7WPHIE-cc-gb:6F4KYR7Z',
    currency: 'GBP'
});

export const getSneakers = () => async dispatch => {
    try {
        const resp = await stockX.searchProducts(('SB'), { limit: 3 })
        dispatch({
            type: actions.FETCH_STOCKX_SUCCESS,
            topSneakers: resp
        })
    }
    catch (error) {
        dispatch({
            type: actions.FETCH_STOCKX_FAILURE,
            error
        })
    }
}

export const getSearchSneakers = (query) => async dispatch => {
    try {
        const resp = await stockX.searchProducts((query), { q: query, limit: 10, })
        dispatch({
            type: actions.FETCH_STOCKX_SEARCH_SUCCESS,
            sneakersSrc: resp
        })
    }
    catch (err) {
        dispatch({
            type: actions.FETCH_STOCKX_SEARCH_FAILURE,
        })
        NotificationManager.error(err.message)
    }
}
// console.log(getSearchSneakers()({query: "test"}))