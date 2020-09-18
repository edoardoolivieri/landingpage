import App from "../components/App"
import {
    connect
} from "react-redux"
import {
    getSneakers,
    getSneakersInfo,
    getSneaker,
    setCurrentUser
} from "../actions/app"

const mapStateToProps = (state, ownProps) => {
    return {
        topSneakers: state.topSneakers,
        sneakerInfo: state.sneakerInfo,
        sneaker: state.sneaker,
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        init: () => {
            dispatch(getSneakers())
            dispatch(getSneakersInfo())
            dispatch(getSneaker())
            dispatch(setCurrentUser())
        },

        getSneakers: () => {
            dispatch(getSneakers())
        },

        getSneakersInfo: () => {
            dispatch(getSneakersInfo())
        },

        getSneaker: () => {
            dispatch(getSneaker())
        },

        setCurrentUser: (user) => {
            dispatch(setCurrentUser(user))
        }
    }
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppContainer