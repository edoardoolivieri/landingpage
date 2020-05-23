import React, { Component } from 'react'
import { CardDeck } from "react-bootstrap"
import Slider from "react-slick"
import _ from "underscore"

export default class News extends Component {

    render() {

        const { items } = this.props

        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: false
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        arrows: false
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 6,
                        initialSlide: 1,
                        arrows: true
                    }
                }
            ]
        }

        return (

            <Slider className="m-40"{...settings}>
                {
                    _.map(items, (item) =>
                        <CardDeck>
                            {item}
                        </CardDeck>
                    )
                }
            </Slider>

        )
    }
}