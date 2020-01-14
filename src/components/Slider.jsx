import React, { Component } from 'react'
import { CardDeck } from "react-bootstrap"
import Slider from "react-slick"
import _ from "underscore"

export default class News extends Component {

    render() {

        const { items } = this.props

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
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
                        initialSlide: 2,
                        arrows: false
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        arrows: false
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