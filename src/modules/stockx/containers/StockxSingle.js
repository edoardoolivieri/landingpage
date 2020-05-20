import StockxSingle from "../components/StockxSingle.jsx"
import {
    connect
} from "react-redux"
import {
} from "../../../redux/actions/app.js"

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

const StockxSingleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(StockxSingle)

export default StockxSingleContainer