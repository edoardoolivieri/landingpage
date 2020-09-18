import React from 'react'
import { Dropdown, Button } from 'react-bootstrap'
import "./CartDropdown.scss"

export default ({ img }) => {
    return (
        <Dropdown className="dropdown-cart">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <img src={img} alt="cart" />
                <span>0</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {/* <Dropdown.Item href="/">Action</Dropdown.Item>
                <Dropdown.Item href="/">Another action</Dropdown.Item>
                <Dropdown.Item href="/">Something else</Dropdown.Item> */}
                <Button>go to checkout</Button>
            </Dropdown.Menu>
        </Dropdown>
    )
}
