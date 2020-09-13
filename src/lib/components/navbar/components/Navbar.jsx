import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"
import styled from 'styled-components';
import { auth } from "../../../utils/firebase"

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
  console.log(currentUser)
  return (
    <Container>
      <Navbar>
        <div className="title">
          <h1>Dixit</h1>
        </div>
        <Nav>
          <Link to="/"> Home</Link>
          <Link to="/stockx"> Stockx</Link>
          {
            currentUser ? (
              <button onClick={() => auth.signOut()}>Log out</button>
            ) : (
                <Link to="/signin">Sign in</Link>
              )
          }
        </Nav>
      </Navbar>
    </Container>
  )

}