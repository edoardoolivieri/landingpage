import React, { Component } from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';

const Mainbrands = styled.div`
  margin: 250px 50px 50px 50px;
  display: flex;
  flex-direction: column;
  h1{
    text-align: center;
    color: $secondColor;
  }
`

const Imagesupreme = styled.div`
  width: 50%;
  height: 361px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  margin: 0 12px;
`

const Clothing = styled.div`
  width: 50%;
`

const Sneakers = styled.div`
  width: 50%;
`

const Containercloth = styled.div`
  display: flex;
  flex-direction: column;
`

const Brandslogo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px;
`

class Brands extends Component {
  render(){
    return(
      <Mainbrands>
        <h1>Brands.</h1>
        <Brandslogo>
          <Image src={`${process.env.PUBLIC_URL}/images/logo2.png`} alt="logo" className="img-logo" />
          <Image src={`${process.env.PUBLIC_URL}/images/logo3.png`} alt="logo" className="img-logo" />
          <Image src={`${process.env.PUBLIC_URL}/images/logo4.png`} alt="logo" className="img-logo" />
          <Image src={`${process.env.PUBLIC_URL}/images/logo5.png`} alt="logo" className="img-logo" />
        </Brandslogo>
        <div className="first-brands">
          <Imagesupreme style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${process.env.PUBLIC_URL}/images/supremebanner.png)` }}>
            <div className="container-text">
              <h2>Buy Exclusive Clothes.</h2>
              <button type="button" className="btn-brands-section">
                <p>Shop</p>
              </button>
            </div>
          </Imagesupreme>
          <Clothing>
            <Containercloth>
              <div className="box-clothing">
                <Image src={`${process.env.PUBLIC_URL}/images/bapefront.png`} alt="bape" className="img-brands" />
                <Image src={`${process.env.PUBLIC_URL}/images/off-whiteback.png`} alt="off-white" className="img-brands" />
              </div>
              <div className="box-clothing">
                <Image src={`${process.env.PUBLIC_URL}/images/supreme2.png`} alt="supreme" className="img-brands" />
                <Image src={`${process.env.PUBLIC_URL}/images/kaws.png`} alt="kaws" className="img-brands" />
              </div>
            </Containercloth>
          </Clothing>
        </div>
        <div className="first-brands second-brands">
          <Sneakers>
            <Containercloth>
              <div className="box-clothing">
                <Image src={`${process.env.PUBLIC_URL}/images/offwhiteshoes.png`} alt="bape" className="img-brands" />
                <Image src={`${process.env.PUBLIC_URL}/images/travisshoes.png`} alt="off-white" className="img-brands" />
              </div>
              <div className="box-clothing">
                <Image src={`${process.env.PUBLIC_URL}/images/sacaishoes.png`} alt="supreme" className="img-brands" />
                <Image src={`${process.env.PUBLIC_URL}/images/drakeshoes.png`} alt="kaws" className="img-brands" />
              </div>
            </Containercloth>
          </Sneakers>
          <Imagesupreme style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${process.env.PUBLIC_URL}/images/banner6.png)`}}>
            <div className="container-text">
              <h2>Sell Exclusive Sneakers.</h2>
              <button type="button" className="btn-brands-section">
                <p>Shop</p>
              </button>
            </div>
          </Imagesupreme> 
        </div>
      </Mainbrands>
    );
  };
}

export default Brands;
