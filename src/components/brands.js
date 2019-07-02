import React, { Component } from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';

import banner from '../images/banner2.png';
import img1 from '../images/bapefront.png';
import img2 from '../images/off-whiteback.png';
import img3 from '../images/supreme2.png';
import img4 from '../images/kaws.png';

const Mainbrands = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  h1{
    text-align: center;
  }
`

const Imagesupreme = styled.div`
  width: 100%;
  height: 361px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  padding: 50px 50px;
`

class Brands extends Component {
  render(){
    return(
      <Mainbrands>
        <h1>" Brands. "</h1>
        <div className="text-brands">
        </div>
        <div className="first-brands">
          <div className="img-clothing">
            <Imagesupreme style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${banner})` }}>
              <div className="container-text">
                <h2>" Buy Exclusive Clothes. "</h2>
                <button type="button" className="btn-brands-section">
                  <p>Shop</p>
                </button>
              </div>
            </Imagesupreme>
          </div>
          <div className="clothing">
            <div className="clothing-container d-flex">
              <div className="dueimg-flex">
                <Image src={img1} alt="bape" className="img-brands" />
                <Image src={img2} alt="off-white" className="img-brands" />
              </div>
              <div className="dueimg-flex">
                <Image src={img3} alt="supreme" className="img-brands" />
                <Image src={img4} alt="kaws" className="img-brands" />
              </div>
            </div>
          </div>
        </div>
        <div className="second-brands"></div>
      </Mainbrands>
    );
  };
}

export default Brands;
