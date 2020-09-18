import CartDropdown from "../components/CartDropdown"
import {
    connect
} from "react-redux"
import {
    toggleCartHidden
} from "../../../redux/actions/app"

const mapStateToProps = (state, ownProps) => {
    return {
        // currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden)
    }
}

const CartDropdownContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CartDropdown)

export default CartDropdownContainer