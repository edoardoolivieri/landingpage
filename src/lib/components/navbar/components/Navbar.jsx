import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"
import styled from 'styled-components';
import { auth } from "../../../utils/firebase"
import extract from "../../../utils/extractValue"
import CartDropdown from "../../cart-dropdown/containers/CartDropdown";

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 30px;
  z-index: 1;
`
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  a{
    margin: 0px 10px;
    font-size: 13px;
    cursor: pointer;
    text-decoration: none;
    color: black;
  }
`
export default ({ currentUser }) => {
  return (
    <Container>
      <Navbar>
        <div className="title">
          <h1>Dixit</h1>
        </div>
        <Nav>
          {/* <Link to="/"> Home</Link> */}
          <Link to="/stockx"> Stockx</Link>
          {/* {
            extract(["currentUser"], currentUser) ? (
              <Link to="/" onClick={() => auth.signOut()}>Log out</Link>

            ) : (
                <Link to="/signin">Sign in</Link>
              )
          }
          <CartDropdown
            img="/images/shopping-cart.svg" /> */}
        </Nav>
      </Navbar>
    </Container>
  )

}