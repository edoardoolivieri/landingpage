import React, { Component } from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';

import payment from '../images/payment.png';

const Footer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 100px;
`

class Service extends Component {
  render(){
    return(
      <Footer>
        <div className="payment">
          <Image src={payment} alt="kaws" className="img-payment" />
        </div>
        <div className="copyright">
          <h2>" Dixit Appear "</h2>
          <p>copyright ©2019, Edoardo Olivieri</p>
        </div>
      </Footer>
    );
  };
}

export default Service;
