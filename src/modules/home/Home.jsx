import React, { Component } from "react"
import { Container } from "react-bootstrap"
import Banner from "../../lib/components/banner/Banner.jsx"
import Service from "../../lib/components/service/Service.jsx"
import Brands from "../../lib/components/brands/Brands.jsx"

export default class Home extends Component{
    render(){
        return(
            <>
                <Container>
                    <Banner />
                    <Service />
                    <Brands />
                </Container>
            </>
        )
    }
}
