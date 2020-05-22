import StockX from "../components/Stockx"
import {
    connect
} from "react-redux"
import {
    getSneakersInfo,
} from "../../../redux/actions/app"

const mapStateToProps = (state, ownProps) => {
    return {
        topSneakers: state.topSneakers,
        isLoadedSneakers: state.isLoadedSneakers,
        id: ownProps.match.params.id,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getSneakersInfo: (id) => dispatch(getSneakersInfo(id))
    }
}

const StockXContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(StockX)

export default StockXContainer