
import initialState from "../initialState"
import actions from "../actions/names"
import _ from "underscore"

// Stockx get Sneaker Info
export const sneakerInfo = (state = initialState.sneakerInfo, action) => {
    switch (action.type) {
        case actions.FETCH_INFORMATION_SUCCESS:
            return action.sneakerInfo
        default:
            return state
    }
}
// Stockx get sneaker
export const sneaker = (state = initialState.sneaker, action) => {
    switch (action.type) {
        case actions.FETCH_SINGLE_SUCCESS:
            return action.sneaker
        default:
            return state
    }
}

