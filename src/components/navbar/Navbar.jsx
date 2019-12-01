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
`
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  p{
    margin: 0px 10px;
    font-weight: lighter;
    font-size: 13px;
    cursor: pointer;
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