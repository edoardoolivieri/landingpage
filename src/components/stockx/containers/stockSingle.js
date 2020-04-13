import StockxSingle from "../components/StockxSingle"
import { getSneaker, getsneakersInfo } from "../actions/stockSingle"
import { connect } from "react-redux"

const mapStateToProps = (state, ownProps) => {
    return {
        getsneakersInfo: state.getsneakersInfo,
        getSneaker: state.getSneaker
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getsneakersInfo: (data) => {
            dispatch(getsneakersInfo(data))
        },
        getSneaker: (data) => {
            dispatch(getSneaker(data))
        },
        getBookmarkedItems: () => {
            dispatch(getBookmarkedItems())
        },
    }
}

const StockxSingleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(StockxSingle)

export default StockxSingleContainer