import React, { Component } from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import Sell from '../images/sell.png';
import Buy from '../images/buy.png';
import Trade from '../images/trade.png';

import ScrollAnimation from 'react-animate-on-scroll';

const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-top: 50px;
`

const Maincards = styled.div`
  h1{
    text-align: center;
    margin: 50px 0px 100px 0px;
  }
`

class Service extends Component {
  render(){
    return(
      <Maincards>
        <h1>Snk Service .</h1>
        <Cards>
          <div className="card">
            <ScrollAnimation animateIn='fadeInDown'>
            <Image src={Sell} alt="Sell ." className="img-section" />
            </ScrollAnimation>
            <h2>Sell .</h2>
            <p>Sed eu pharetra elit. Duis pulvinar cursus ornare. Aliquam nulla tellus, consequat et nisl sit amet.</p>
          </div>
          <div className="card">
            <ScrollAnimation animateIn='fadeInDown'>
            <Image src={Buy} alt="Sell ." className="img-section" />
            </ScrollAnimation>
            <h2>Buy .</h2>
            <p>Sed eu pharetra elit. Duis pulvinar cursus ornare. Aliquam nulla tellus, consequat et nisl sit amet.</p>
          </div>
          <div className="card">
            <ScrollAnimation animateIn='fadeInDown'>
            <Image src={Trade} alt="Sell ." className="img-section" />
            </ScrollAnimation>
            <h2>Trade .</h2>
            <p>Sed eu pharetra elit. Duis pulvinar cursus ornare. Aliquam nulla tellus, consequat et nisl sit amet.</p>
          </div>
        </Cards>
      </Maincards>
    );
  };
}

export default Service;
