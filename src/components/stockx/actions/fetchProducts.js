import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from './product.js';
const stockxAPI = require('stockx-api');
const stockX = new stockxAPI();


export default function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsPending());
        stockX.searchProducts('Dunk', { limit: 3 })
        .then(res => res.json())
        // console.log(res.products)
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchProductsSuccess(res.products));
            return res.products;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}
