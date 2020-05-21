
import initialState from "../initialState"
import actions from "../actions/names"
import _ from "underscore"


export const topSneakers = (state = initialState.topSneakers, action) => {
    switch (action.type) {
        case actions.FETCH_STOCKX_SUCCESS:
            return action.topSneakers
        default:
            return state
    }
}

export const sneakersSrc = (state = initialState.sneakersSrc, action) => {
    console.log(action)
    switch (action.type) {
        case actions.FETCH_STOCKX_SEARCH_SUCCESS:
            return action.sneakersSrc
        default:
            return state
    }
}