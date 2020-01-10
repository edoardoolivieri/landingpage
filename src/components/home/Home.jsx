import React, { Component } from "react"
import { Container } from "react-bootstrap"
import Section1 from "../banner/banner.jsx"
import Section2 from "../service/service.jsx"
import Section3 from "../brands/brands.jsx"
import Section4 from "../articles/articles.jsx"
import Section5 from "../footer/footer.jsx"
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
