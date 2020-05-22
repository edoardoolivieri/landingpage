import actions from "./names"
import { NotificationManager } from "react-notifications";

export const stockxAPI = require('stockx-api');
export const stockX = new stockxAPI({
    // proxy: '',
    currency: 'GBP'
});

// StockX Page
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

// Stockx Single Page