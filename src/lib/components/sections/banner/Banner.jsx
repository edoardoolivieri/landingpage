import React, { Component } from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

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
  @media only screen and (max-width: 992px) {
    display: none;
  }
`
const Content = styled.div`
  width: 44%;
  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`

class Home extends Component {
  render(){
    return(
      <Maincontainer>
        <div className="content-left">
          <div className="image-sneaker">
            <Image src={`${process.env.PUBLIC_URL}/images/scroll.png`} alt="Logo" className="img-sneaker" />
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
            <a href="https://dixit-appear.github.io/portfolio/" rel="noopener noreferrer" target="_blank">
              <i className="fas fa-id-card"></i>
            </a>
          </div>
        </div>
        <Container>
          <Img>
            <ScrollAnimation animateIn='fadeInDown'>
              <Image src={`${process.env.PUBLIC_URL}/images/airforce2.jpg`}  alt="Off-white Air force 1 Black" className="img-home" />
            </ScrollAnimation>
          </Img>
          <Content>
            <ScrollAnimation animateIn='fadeInUp'>
              <div className="container-home">
                <h1>Dixit Store</h1>
                  <div className="info">
                    <p className="fix-margin">Buy.</p>
                    <p>Sell.</p>
                    <p>Stock.</p>
                  </div>
                <p className="description">
                  Sed eu pharetra elit. Duis pulvinar cursus ornare. Aliquam nulla tellus, consequat et nisl sit amet, suscipit gravida diam. Praesent nulla velit, dictum vitae sollicitudin at, egestas sed nisi.
                </p>
                <button type="button" className="btn-first-section">
                  <p>Find your way</p>
                </button>
              </div>
            </ScrollAnimation>
          </Content>
        </Container>
        <div className="content-right">
          <Image src={`${process.env.PUBLIC_URL}/images/scroll.png`}  alt="Logo" className="img-scroll" />
        </div>
      </Maincontainer>
    );
  };
}

export default Home;
