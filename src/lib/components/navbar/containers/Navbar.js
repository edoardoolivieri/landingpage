import Navbar from "../components/Navbar"
import {
    connect
} from "react-redux"

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const NavbarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar)

export default NavbarContainer