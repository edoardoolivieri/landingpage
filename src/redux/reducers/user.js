
import initialState from "../initialState"
import actions from "../actions/names"
import _ from "underscore"

export const currentUser = (state = initialState.currentUser, action) => {
    switch (action.type) {
        case actions.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}


