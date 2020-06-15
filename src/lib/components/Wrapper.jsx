import React from "react"
import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"

export default (Component) => {
    class Wrapper extends React.PureComponent {
        render() {

            return (
                <>
                    <Navbar />
                    <Component />
                    <Footer />
                </>
            );
        }
    }
    return Wrapper
}

