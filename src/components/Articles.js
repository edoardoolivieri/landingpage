import React, { Component } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
// import { Sticky, StickyContainer  } from 'react-sticky';

const News = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p{
    margin: 0px 10px;
    font-weight: lighter;
    font-size: 13px;
    cursor: pointer;
  }
`



const API_KEY = "llY2uvUgpY3CwpbBaMhheh47FQJSDMhI";

class Articles extends Component{

  state = {
    articles: []
  }

  componentDidMount(){
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=virgil&api-key=${API_KEY}`)
      .then(res => res.json())
      .then((data) => {
      this.setState({ articles: [data.response.docs] })
      console.log(this.state)
    })
      .catch(console.log)
  }

  render(){
    const listItems = this.state.articles.map((article, index) =>
      <div>
        <div className="card" id={article[0]._id}>
          <div className="content">
            <div className="header">
              <a href={article[0].web_url}>{article[0].headline.main}</a>
            </div>
            <div className="description">{article[0].snippet}</div>
            <br />
          </div>
        </div>
        <div className="card" id={article[1]._id}>
          <div className="content">
          <div className="header">
            <a href={article[1].web_url}>{article[1].headline.main}</a>
          </div>
          <div className="description">{article[1].snippet}</div>
          <br />
          </div>
        </div>
        <div className="card" id={article[2]._id}>
          <div className="content">
          <div className="header">
            <a href={article[2].web_url}>{article[2].headline.main}</a>
          </div>
          <div className="description">{article[2].snippet}</div>
          <br />
          </div>
        </div>
        <div className="card" id={article[3]._id}>
          <div className="content">
          <div className="header">
            <a href={article[3].web_url}>{article[3].headline.main}</a>
          </div>
          <div className="description">{article[3].snippet}</div>
          <br />
          </div>
        </div>
        <div className="card" id={article[4]._id}>
          <div className="content">
          <div className="header">
            <a href={article[4].web_url}>{article[4].headline.main}</a>
          </div>
          <div className="description">{article[4].snippet}</div>
          <br />
          </div>
        </div>
        <div className="card" id={article[5]._id}>
          <div className="content">
          <div className="header">
            <a href={article[5].web_url}>{article[5].headline.main}</a>
          </div>
          <div className="description">{article[5].snippet}</div>
          <br />
          </div>
        </div>
        <div className="card" id={article[6]._id}>
          <div className="content">
          <div className="header">
            <a href={article[6].web_url}>{article[6].headline.main}</a>
          </div>
          <div className="description">{article[6].snippet}</div>
          <br />
          </div>
        </div>
        <div className="card" id={article[7]._id}>
          <div className="content">
            <div className="header">
              <a href={article[7].web_url}>{article[7].headline.main}</a>
            </div>
            <div className="description">{article[7].snippet}</div>
            <br />
          </div>
        </div>
      </div>
    );
    return(
      <News>
      <h1>NEWS</h1>
      <p>NYT News About Virgil Abloh the creator of Off-White</p>
        {listItems}
      </News>

    )
  }
}



export default Articles;

         //   <div className="image">{article[0].multimedia[0].url}</div>
         //   <img key={article.toString()} src={article[0].multimedia[4].url}/>

        // <li key={index[1]}>
        //   {article.response.docs[1].abstract}

        // </li>
        // <li key={index[2]}>
        //   {article.response.docs[2].abstract}

        // </li>
        // <li key={index[3]}>
        //   {article.response.docs[3].abstract}

        // </li>
        // <li key={index[4]}>
        //   {article.response.docs[4].abstract}

        // </li>
        // <li key={index[5]}>
        //   {article.response.docs[5].abstract}

        // </li>
