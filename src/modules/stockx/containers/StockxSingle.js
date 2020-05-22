import StockxSingle from "../components/StockxSingle"
import {
    connect
} from "react-redux"
import {
    getSneakersInfo,
} from "../../../redux/actions/app"

const mapStateToProps = (state, ownProps) => {
    return {
        sneakerInfo: state.sneakerInfo,
        sneaker: state.sneaker,
        id: ownProps.match.params.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSneakersInfo: (id) => dispatch(getSneakersInfo(id))
    }
}

const StockxSingleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(StockxSingle)

export default StockxSingleContainer