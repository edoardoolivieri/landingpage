import appReducers from "./reducers"
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
// import logger from "redux-logger"

const middleware = [thunk]

export default createStore(appReducers, compose(applyMiddleware(...middleware)))