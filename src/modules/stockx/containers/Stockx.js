import StockX from "../components/Stockx"
import {
    connect
} from "react-redux"
import {
    getSneakers,
} from "redux/actions/app"

const mapStateToProps = (state, ownProps) => {
    return {
        topSneakers: state.topSneakers,
        isLoadedSneakers: state.isLoadedSneakers,
        id: ownProps.match.params.id,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getSneakers: (id) => dispatch(getSneakers(id))
    }
}

const StockXContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(StockX)

export default StockXContainer