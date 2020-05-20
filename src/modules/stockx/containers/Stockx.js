import StockX from "../components/Stockx"
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

const StockXContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(StockX)

export default StockXContainer