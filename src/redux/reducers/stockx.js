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

export const isLoadedSneakers = (state = initialState.isLoadedSneakers, action) => {
    switch (action.type) {
        case actions.FETCH_STOCKX_FAILURE:
            return false
        case actions.FETCH_STOCKX_BEGIN:
        case actions.FETCH_STOCKX_SUCCESS:
            return true
        default:
            return state
    }
}
