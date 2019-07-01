import React, { Component } from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import Nike from '../images/airforce2.jpg';
import Sneakers from '../images/sneakers.png';
import Scroll from '../images/scroll.png';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  padding: 0px 70px 0px 30px;
`
const Maincontainer = styled.div`
  display: flex;
  align-items: center;
`

const Img = styled.div`
  width: 60%;
  margin-right: 40px;
`
const Content = styled.div`
  width: 44%;
`
class Home extends Component {
  render(){
    return(
      <Maincontainer>
        <div className="content-left">
          <div className="image-sneaker">
            <Image src={Sneakers} alt="Logo" className="img-sneaker" />
          </div>
          <div className="social">
            <a href="https://www.linkedin.com/in/edoardo-olivieri/" rel="noopener noreferrer" target="_blank">
              <i className="fab fa-linkedin" />
            </a>
            <a href="https://www.instagram.com/diddo6/?hl=it" rel="noopener noreferrer" target="_blank">
              <i className=" fab fa-instagram"></i>
            </a>
            <a href="https://github.com/Dixit-Appear" rel="noopener noreferrer" target="_blank">
              <i className=" fab fa-github"></i>
            </a>
          </div>
        </div>
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
        <div className="content-right">
          <Image src={Scroll} alt="Logo" className="img-scroll" />
        </div>
      </Maincontainer>
    );
  };
}

export default Home;
