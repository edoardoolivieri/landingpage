import StockX from "../components/Stockx"
import {
    connect
} from "react-redux"

const mapStateToProps = (state, ownProps) => {
    return {
        topSneakers: state.topSneakers,
        sneakersSrc: state.sneakersSrc 
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

const StockXContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(StockX)

export default StockXContainer