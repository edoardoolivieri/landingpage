import React from 'react';
import styled from 'styled-components';
import './style/App.scss';
import { Sticky, StickyContainer  } from 'react-sticky';

import Home from './components/home';
import Service from './components/service';
import Brands from './components/brands';

const Section = styled.div`
  margin: 50px 60px;
  min-height: 100vh;
`

const AppWrapper = styled.div`
  margin: 20px 50px;
`
const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 60px;
`
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  p{
    margin: 0px 10px;
  }
`
let renderCount = 0;
function App() {
  return (
    <AppWrapper>
      <StickyContainer>
        <Sticky disableHardwareAcceleration>
        {({ style }) => (
          <Navbar style={style} renderCount={renderCount++}>
            <div className="title">
              Dixit
            </div>
            <Nav>
              <p>Brands</p>
              <p>Services</p>
              <p>About Us</p>
            </Nav>
          </Navbar>
        )}
        </Sticky>
        <Section>
          <Home />
        </Section>
        <Section>
          <Service />
        </Section>
        <Section>
          <Brands />
        </Section>
      </StickyContainer>
    </AppWrapper>
  );
}

export default App;
