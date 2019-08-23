import React, { Component } from 'react';
import styled from 'styled-components';

const StyleForm = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;

`

class Form extends Component {
  render(){
    return(
      <StyleForm>
        <form>
          <input type="text" name="sneakers" placeholder="SNEAKERS"/>
        </form>
        <button>Find Yours</button>
      </StyleForm>
    );
  };
}

export default Form;
