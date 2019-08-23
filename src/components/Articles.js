import React, { Component } from 'react';
import styled from 'styled-components';

const Footer = styled.div`
`
const API_KEY = "iwQGATb3B3YA6GzsZkG0zxVV4JLqnf96";
class Articles extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      isLoaded: false,
    }
  };

  componentDidMount() {
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sneakers&api-key=${API_KEY}`)
      .then(response => response.json())
      .then(data => this.setState({ articles: data.articles, isLoaded: true }));
  }
  render(){
    const { isLoaded, articles } = this.state;
    if (!isLoaded) {
      return <div>Loading....</div>;
    }
    else{
      return(
        <div>
          <ul>
          </ul>
        </div>
      );
    }
  };
}

export default Articles;
