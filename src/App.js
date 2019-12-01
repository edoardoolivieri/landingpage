// import React, { Component } from 'react';
// import styled from 'styled-components';
// import './style/App.scss';
// // import { Sticky, StickyContainer  } from 'react-sticky';

// import Home from './components/home';
// import Service from './components/service';
// import Brands from './components/brands';
// import Articles from './components/articles';
// import Footer from './components/footer';

// const Section = styled.div`
//   min-height: auto;
//   margin-top: 50px;
// `

// const Section1 = styled.div`
//   min-height: 100vh;
// `

// const AppWrapper = styled.div`
//   margin: 20px 50px;
// `
// const Navbar = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: -webkit-sticky;
//   position: sticky;
//   top: 30px;
// `
// const Nav = styled.div`
//   display: flex;
//   justify-content: space-between;
//   p{
//     margin: 0px 10px;
//     font-weight: lighter;
//     font-size: 13px;
//     cursor: pointer;
//   }
// `

// class App extends Component{
//   constructor(props){
//      super(props)
//      //creates a reference for your element to use
//      this.myDivService = React.createRef()
//   }
//   handleOnClick = (event) => {
//     if(this.myDivService.current){
//         this.myDivService.current.scrollIntoView({
//            behavior: "smooth",
//            block: "center",
//            inline: "center"
//         })
//     }
//   }

//   render(){
//     return(
//       <AppWrapper>
//         <Navbar>
//           <div className="title">
//             <h1>Dixit</h1>
//           </div>
//           <Nav>
//             <p onClick={this.handleOnClick}>services</p>
//             <p>brands</p>
//           </Nav>
//         </Navbar>
//         <Section1>
//           <Home />
//         </Section1>
//         <Section ref={this.myDivService}>
//           <Service />
//         </Section>
//         <Section>
//           <Brands />
//         </Section>
//         <Section>
//           <Articles />
//         </Section>
//         <Footer />
//       </AppWrapper>
//     )
//   }
// }



// export default App;

import React, {Component} from "react"
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./components/home/Home.jsx"
import Stockx from "./components/stockx/Stockx.jsx"

export default class App extends Component{
  render(){
    return(
      <>
        <Router>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/stockx" component={Stockx} />
        </Router>
      </>
    )
  }

}