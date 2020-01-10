import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Loading from "../Loading.jsx"

const News = styled.div`
  margin: 200px 50px 50px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const API_KEY = "llY2uvUgpY3CwpbBaMhheh47FQJSDMhI";

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: []
    };
  }

  componentDidMount() {
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Sneakers%20resell&api-key=${API_KEY}`)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          articles: result.response.docs
        });
      },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, articles } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loading />;
    } else {
      return (
        <div>
          <News>
            <h1>NYT Reseller News.</h1>
          </News>
          <div className="articles">
            <div className="articles-list">
              {articles.map(article => (
                <div className="card" id={article._id}>
                  <div className="content">
                    <div className="header">
                      <a href={article.web_url} rel="noopener noreferrer" target="_blank">{article.headline.main}</a>
                    </div>
                    <div className="description">{article.snippet}</div>
                    <div className="d-flex justify-content-center">
                      <p>{moment(article.pub_date).format("DD MMM, YYYY")}</p>
                      <p>{article.section_name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="advertising">

            </div>
          </div>

        </div>
      );
    }
  }
}



export default Articles;

