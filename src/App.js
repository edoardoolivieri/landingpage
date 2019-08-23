import React, { Component } from 'react';
import styled from 'styled-components';
import './style/App.scss';
import ScrollAnimation from 'react-animate-on-scroll';
// import { Sticky, StickyContainer  } from 'react-sticky';

import Home from './components/home';
import Service from './components/service';
import Brands from './components/brands';
import Footer from './components/footer';
import Articles from './components/Articles';

const Section = styled.div`
  min-height: auto;
  margin-top: 50px;
`

const Section1 = styled.div`
  min-height: 100vh;
`

const AppWrapper = styled.div`
  margin: 20px 50px;
`
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


class App extends Component{
  constructor(props){
     super(props)
     //creates a reference for your element to use
     this.myDivService = React.createRef()
     this.state = {
      articles: [],
     }
  }

  handleOnClick = (event) => {
    if(this.myDivService.current){
        this.myDivService.current.scrollIntoView({
           behavior: "smooth",
           block: "center",
           inline: "center"
        })
    }
  }


  render(){
    return(
      <AppWrapper>
        <Navbar>
          <div className="title">
            <h1>Dixit</h1>
          </div>
          <Nav>
            <p onClick={this.handleOnClick}>services</p>
            <p>brands</p>
          </Nav>
        </Navbar>
        <Section1>
          <Home />
        </Section1>
        <Section ref={this.myDivService}>
          <Service />
        </Section>
        <Section>
          <Brands />
        </Section>
        <Section>
          <Articles />
        </Section>
        <Footer />
      </AppWrapper>
    )
  }
}



export default App;
