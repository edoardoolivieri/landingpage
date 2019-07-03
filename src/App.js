import React from 'react';
import styled from 'styled-components';
import './style/App.scss';
// import { Sticky, StickyContainer  } from 'react-sticky';

import Home from './components/home';
import Service from './components/service';
import Brands from './components/brands';
import Footer from './components/footer';

const Section = styled.div`
  min-height: 100vh;
`

const Section1 = styled.div`
  min-height: 100vh;
  margin-top: 50px;
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
  }
`

function App() {
  return (
    <AppWrapper>
      <Navbar>
        <div className="title">
          Dixit
        </div>
        <Nav>
          <p>brands</p>
          <p>services</p>
        </Nav>
      </Navbar>
      <Section1>
        <Home />
      </Section1>
      <Section>
        <Service />
      </Section>
      <Section>
        <Brands />
      </Section>
      <Footer />
    </AppWrapper>
  );
}

export default App;
