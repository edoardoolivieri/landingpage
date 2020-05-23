import actions from "./names"
import { NotificationManager } from "react-notifications";

export const stockxAPI = require('stockx-api');
export const stockX = new stockxAPI({
    // proxy: 'pr.blankpremium.co.uk:7777:customer-2L7WPHIE-cc-gb:6F4KYR7Z',
    currency: 'GBP'
});

// StockX get Top Sneakers 
export const getSneakers = (id) => async dispatch => {
    try {
        const resp = await stockX.searchProducts(('SB'), { limit: 3 })
        dispatch({
            type: actions.FETCH_STOCKX_SUCCESS,
            topSneakers: resp
        })
        NotificationManager.success("StockX fetch success")
    }
    catch (error) {
        dispatch({
            type: actions.FETCH_STOCKX_FAILURE,
            error
        })
        NotificationManager.error(error.message)
    }
}


// Stockx get Sneaker Info
export const getSneakersInfo = (id) => async dispatch => {
    try {
        const resp = await stockX.fetchProductDetails(`https://stockx.com/${id}`)
        dispatch({
            type: actions.FETCH_INFORMATION_SUCCESS,
            sneakerInfo: resp
        })
        // NotificationManager.success("StockX fetch success")
    }
    catch (error) {
        dispatch({
            type: actions.FETCH_INFORMATION_FAILURE,
            error
        })
        // NotificationManager.error(error.message)
    }
}


// Stockx get sneaker
export const getSneaker = (id) => async dispatch => {
    try {
        const resp = await stockX.searchProducts(`${id}`, { limit: 1 })
        dispatch({
            type: actions.FETCH_SINGLE_SUCCESS,
            sneaker: resp
        })
        // NotificationManager.success("StockX fetch success")
    }
    catch (error) {
        dispatch({
            type: actions.FETCH_SINGLE_FAILURE,
            error
        })
        // NotificationManager.error(error.message)
    }
}
