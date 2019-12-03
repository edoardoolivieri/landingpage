import React, { Component } from "react"
import { Container } from "react-bootstrap"

import Navbar from "../navbar/Navbar.jsx"

export default class Home extends Component{

    render(){
        return(
            <>
                <Container>
                    <Navbar/>
                </Container>
            </>
        )
    }
}
