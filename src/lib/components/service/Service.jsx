import React, { Component } from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-top: 50px;
  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }
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
            <Image src={`${process.env.PUBLIC_URL}/images/sell.png`} alt="Sell ." className="img-section" />
            </ScrollAnimation>
            <h2>Sell .</h2>
            <p>Sed eu pharetra elit. Duis pulvinar cursus ornare. Aliquam nulla tellus, consequat et nisl sit amet.</p>
          </div>
          <div className="card">
            <ScrollAnimation animateIn='fadeInDown'>
            <Image src={`${process.env.PUBLIC_URL}/images/buy.png`} alt="Sell ." className="img-section" />
            </ScrollAnimation>
            <h2>Buy .</h2>
            <p>Sed eu pharetra elit. Duis pulvinar cursus ornare. Aliquam nulla tellus, consequat et nisl sit amet.</p>
          </div>
          <div className="card">
            <ScrollAnimation animateIn='fadeInDown'>
            <Image src={`${process.env.PUBLIC_URL}/images/trade.png`} alt="Sell ." className="img-section" />
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
