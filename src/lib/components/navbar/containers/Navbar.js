import Navbar from "../components/Navbar"
import {
    connect
} from "react-redux"
// import {

// } from "../../../redux/actions/app"

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

const NavbarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar)

export default NavbarContainer