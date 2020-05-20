import React, {Component} from "react"
import {withRouter, Link} from "react-router-dom"
import styled from 'styled-components';

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

class Navbarr extends Component{
  render(){
    return(
      <>
        <Navbar>
          <div className="title">
            <h1>Dixit</h1>
          </div>
          <Nav>
            <Link to="/"> Home</Link>
            <Link to="/stockx"> Stockx</Link> 
          </Nav>
        </Navbar>
      </>
    )
  }

}

export default withRouter(Navbarr)