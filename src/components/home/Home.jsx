import React, { Component } from "react"
import { Container } from "react-bootstrap"
import Section1 from "./home"
import Section2 from "./service"
import Section3 from "./brands"
import Section4 from "./articles"
import Section5 from "./footer"
import Navbar from "../navbar/Navbar.jsx"

export default class Home extends Component{
    render(){
        return(
            <>
                <Container>
                    <Navbar/>
                    <Section1 />
                    <Section2 />
                    <Section3 />
                    <Section4 />
                    <Section5 />
                </Container>
            </>
        )
    }
}
