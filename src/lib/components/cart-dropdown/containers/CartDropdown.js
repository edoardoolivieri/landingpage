import CartDropdown from "../components/CartDropdown"
import {
    connect
} from "react-redux"
// import {
//     toggleCartHidden
// } from "redux/actions/app"

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

const CartDropdownContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CartDropdown)

export default CartDropdownContainer