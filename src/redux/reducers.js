import { combineReducers } from "redux"

import * as appReducers from "./reducers/app"
import * as stockx from "./reducers/stockx"
import * as stockxSingle from "./reducers/stockxSingle"
import * as user from "./reducers/user"

import _ from "underscore"

// Combining reducers
_.extend(
    appReducers,
    stockx,
    stockxSingle,
    user
)

export default combineReducers(appReducers)