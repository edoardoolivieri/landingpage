import actions from "./names"
import { NotificationManager } from "react-notifications";

export const stockxAPI = require('stockx-api');
export const stockX = new stockxAPI({
    proxy: '168.81.222.129:3718',
    currency: 'GBP'
});

// StockX get sneakers 
export const getSneakers = () => async dispatch => {
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
        console.log(resp)
        dispatch({
            type: actions.FETCH_INFORMATION_SUCCESS,
            sneakerInfo: resp
        })
        NotificationManager.success("StockX fetch success")
    }
    catch (error) {
        dispatch({
            type: actions.FETCH_INFORMATION_FAILURE,
            error
        })
        NotificationManager.error(error.message)
    }
}


// Stockx get sneaker
export const getSneaker = (id) => async dispatch => {
    try {
        const resp = await stockX.searchProducts(id, { limit: 1 })
        dispatch({
            type: actions.FETCH_SINGLE_SUCCESS,
            sneaker: resp
        })
        NotificationManager.success("StockX fetch success")
    }
    catch (error) {
        dispatch({
            type: actions.FETCH_SINGLE_FAILURE,
            error
        })
        NotificationManager.error(error.message)
    }
}
