import { combineReducers } from "redux"

import * as appReducers from "./reducers/app"
import * as stockx from "./reducers/stockx"

import _ from "underscore"

// Combining reducers
_.extend(
    appReducers,
    stockx
)

export default combineReducers(appReducers)