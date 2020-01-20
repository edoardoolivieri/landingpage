import React, { Component, Children } from "react"

export default class Title extends Component {
    render() {
        const { title, children } = this.props
        return (
            <div>
                <h3>{title}</h3>
                <p>{children}</p>
            </div>
        )
    }
}