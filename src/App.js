import React from 'react';
import styled from 'styled-components';
import './style/App.scss';
// import { Sticky, StickyContainer  } from 'react-sticky';
import { Navbar } from 'react-bootstrap';

import Home from './components/home';
import Service from './components/service';
import Brands from './components/brands';

const Section = styled.div`
  min-height: 100vh;
`
const AppWrapper = styled.div`
  margin: 20px 50px;
`
const Navbarbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  p{
    margin: 0px 10px;
  }
`

function App() {
  return (
    <AppWrapper>
      <Navbarbar>
        <div className="title">
          Dixit
        </div>
        <Nav>
          <p>Brands</p>
          <p>Services</p>
          <p>About Us</p>
        </Nav>
      </Navbarbar>
      <Section>
        <Home />
      </Section>
      <Section>
        <Service />
      </Section>
      <Section>
        <Brands />
      </Section>
    </AppWrapper>
  );
}

export default App;
