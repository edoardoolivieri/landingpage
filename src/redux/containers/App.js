import App from "../components/App"
import {
    connect
} from "react-redux"
import {
    getSneakers,
    getSneakersInfo,
    getSneaker
} from "../actions/app"

const mapStateToProps = (state, ownProps) => {
    return {
        topSneakers: state.topSneakers,
        sneakerInfo: state.sneakerInfo,
        sneaker: state.sneaker
    }
}

const mapDispatchToProps = dispatch => {
    return {
        init: () => {
            dispatch(getSneakers())
            dispatch(getSneakersInfo())
            dispatch(getSneaker())
        },

        getSneakers: () => {
            dispatch(getSneakers())
        },

        getSneakersInfo: () => {
            dispatch(getSneakersInfo())
        },

        getSneaker: () => {
            dispatch(getSneaker())
        }
    }
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppContainer