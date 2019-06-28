import React, { Component } from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import Nike from '../images/airforce2.jpg';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 150px;
`

const Img = styled.div`
  width: 50%;
  margin-right: 30px;
`
const Content = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  text-align: left;
`
class Home extends Component {
  render(){
    return(
      <Container>
        <Img>
          <Image src={Nike} alt="Off-white Air force 1 Black" className="img-home" />
        </Img>
        <Content>
          <div className="container-home">
            <h1>Sneakers Shop</h1>
              <div className="info">
                <p>Buy.</p>
                <p>Sell.</p>
                <p>Trade.</p>
              </div>
            <p>
              Sed eu pharetra elit. Duis pulvinar cursus ornare. Aliquam nulla tellus, consequat et nisl sit amet, suscipit gravida diam. Praesent nulla velit, dictum vitae sollicitudin at, egestas sed nisi.
            </p>
            <button type="button" className="btn-first-section">
              <p>Find your Sneaker</p>
            </button>
          </div>
        </Content>
      </Container>
    );
  };
}

export default Home;
