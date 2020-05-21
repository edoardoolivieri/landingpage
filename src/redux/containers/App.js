import App from "../components/App"
import {
    connect
} from "react-redux"
import {
    getSneakers,
    getSearchSneakers
} from "../actions/app"

const mapStateToProps = (state, ownProps) => {
    return {
        topSneakers: state.topSneakers,
        sneakersSrc: state.sneakersSrc
    }
}

const mapDispatchToProps = dispatch => {
    return {
        init: () => {
            dispatch(getSneakers())
            dispatch(getSearchSneakers())
        },
        getSneakers: () => {
            dispatch(getSneakers())
        },
        getSearchSneakers: () => {
            dispatch(getSearchSneakers())
        }
        
    }
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppContainer