import App from "../components/App"
import {
    connect
} from "react-redux"
import {
    getSneakers,
} from "../actions/app"

const mapStateToProps = (state, ownProps) => {
    return {
        topSneakers: state.topSneakers,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        init: () => {
            dispatch(getSneakers())
        },
        getSneakers: () => {
            dispatch(getSneakers())
        },
        
    }
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppContainer