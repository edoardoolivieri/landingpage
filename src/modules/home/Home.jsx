import React from "react"
import { Container } from "react-bootstrap"
import Banner from "lib/components/sections/banner/Banner.jsx"
import Service from "lib/components/sections/service/Service.jsx"
import Brands from "lib/components/sections/brands/Brands.jsx"

export default () => {
    return (
        <Container>
            <Banner />
            <Service />
            <Brands />
        </Container>
    )
}

