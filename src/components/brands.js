import React, { Component } from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';

import banner from '../images/banneroff.png';
import img1 from '../images/bapefront.png';
import img2 from '../images/off-whiteback.png';
import img3 from '../images/supreme2.png';
import img4 from '../images/kaws.png';

import banner2 from '../images/banner6.png';
import img5 from '../images/offwhiteshoes.png';
import img6 from '../images/travisshoes.png';
import img7 from '../images/sacaishoes.png';
import img8 from '../images/drakeshoes.png';

import img9 from '../images/logo1.png';
import img10 from '../images/logo2.png';
import img11 from '../images/logo3.png';
import img12 from '../images/logo4.png';
import img13 from '../images/logo5.png';


const Mainbrands = styled.div`
  margin: 50px;
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
`

const Clothing = styled.div`
  width: 50%;
  margin: 0px 0px 0px 50px;
`

const Sneakers = styled.div`
  width: 50%;
  margin: 0px 50px 0px 0px;
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
          <Image src={img9} alt="logo" className="img-logo logo1" />
          <Image src={img10} alt="logo" className="img-logo" />
          <Image src={img11} alt="logo" className="img-logo" />
          <Image src={img12} alt="logo" className="img-logo" />
          <Image src={img13} alt="logo" className="img-logo" />
        </Brandslogo>
        <div className="first-brands">
          <Imagesupreme style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${banner})` }}>
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
                <Image src={img1} alt="bape" className="img-brands" />
                <Image src={img2} alt="off-white" className="img-brands" />
              </div>
              <div className="box-clothing">
                <Image src={img3} alt="supreme" className="img-brands" />
                <Image src={img4} alt="kaws" className="img-brands" />
              </div>
            </Containercloth>
          </Clothing>
        </div>
        <div className="first-brands">
          <Sneakers>
            <Containercloth>
              <div className="box-clothing">
                <Image src={img5} alt="bape" className="img-brands" />
                <Image src={img6} alt="off-white" className="img-brands" />
              </div>
              <div className="box-clothing">
                <Image src={img7} alt="supreme" className="img-brands" />
                <Image src={img8} alt="kaws" className="img-brands" />
              </div>
            </Containercloth>
          </Sneakers>
          <Imagesupreme style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${banner2})` }}>
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
