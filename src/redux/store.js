import appReducers from "./reducers"
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

const middleware = [thunk]

export default createStore(appReducers, compose(applyMiddleware(...middleware)))