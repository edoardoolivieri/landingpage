import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
// import { Sticky, StickyContainer  } from 'react-sticky';

const News = styled.div`
  margin: 200px 50px 50px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`


const API_KEY = "llY2uvUgpY3CwpbBaMhheh47FQJSDMhI";

class Articles extends Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: []
    };
  }

  componentDidMount(){
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
    console.log(articles)
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <News>
            <h1>NYT Reseller News.</h1>
          </News>
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
                {/* <img src={article.multimedia[0].url} alt=""/> */}
                </div>  
              </div>
            </div>
          ))}
        </div>
      );
    }
  }

  // render(){
  //   const { error, isLoaded,  } = this.state;
  //   const listItems = this.state.articles.map((article, index) =>
  //     <div>
  //       <div className="card" id={article[0]._id}>
  //         <div className="content">
  //           <div className="header">
  //             <a href={article[0].web_url} rel="noopener noreferrer" target="_blank">{article[0].headline.main}</a>
  //           </div>
  //           <div className="description">{article[0].snippet}</div>
  //           <p>{article[0].pub_date}</p>
  //           <p>{article[0].source}</p>
  //           <br />
  //         </div>
  //       </div>
  //       <div className="card" id={article[1]._id}>
  //         <div className="content">
  //         <div className="header">
  //           <a href={article[1].web_url} rel="noopener noreferrer" target="_blank">{article[1].headline.main}</a>
  //         </div>
  //         <div className="description">{article[1].snippet}</div>
  //         <br />
  //         </div>
  //       </div>
  //       <div className="card" id={article[2]._id}>
  //         <div className="content">
  //         <div className="header">
  //           <a href={article[2].web_url} rel="noopener noreferrer" target="_blank">{article[2].headline.main}</a>
  //         </div>
  //         <div className="description">{article[2].snippet}</div>
  //         <br />
  //         </div>
  //       </div>
  //       <div className="card" id={article[3]._id}>
  //         <div className="content">
  //         <div className="header">
  //           <a href={article[3].web_url} rel="noopener noreferrer" target="_blank">{article[3].headline.main}</a>
  //         </div>
  //         <div className="description">{article[3].snippet}</div>
  //         <br />
  //         </div>
  //       </div>
  //       <div className="card" id={article[4]._id}>
  //         <div className="content">
  //         <div className="header">
  //           <a href={article[4].web_url} rel="noopener noreferrer" target="_blank">{article[4].headline.main}</a>
  //         </div>
  //         <div className="description">{article[4].snippet}</div>
  //         <br />
  //         </div>
  //       </div>
  //       <div className="card" id={article[5]._id}>
  //         <div className="content">
  //         <div className="header">
  //           <a href={article[5].web_url} rel="noopener noreferrer" target="_blank">{article[5].headline.main}</a>
  //         </div>
  //         <div className="description">{article[5].snippet}</div>
  //         <br />
  //         </div>
  //       </div>
  //       <div className="card" id={article[6]._id}>
  //         <div className="content">
  //         <div className="header">
  //           <a href={article[6].web_url} rel="noopener noreferrer" target="_blank">{article[6].headline.main}</a>
  //         </div>
  //         <div className="description">{article[6].snippet}</div>
  //         <br />
  //         </div>
  //       </div>
  //       <div className="card" id={article[7]._id}>
  //         <div className="content">
  //           <div className="header">
  //             <a href={article[7].web_url} rel="noopener noreferrer" target="_blank">{article[7].headline.main}</a>
  //           </div>
  //           <div className="description">{article[7].snippet}</div>
  //           <br />
  //         </div>
  //       </div>
  //     </div>
  //   );
  //   return(
  //     <News>
  //     <h1>News.</h1>
  //     <p>NYT News About Virgil Abloh the creator of " Off-White "</p>
  //     <div>{listItems}</div>
  //     </News>

  //   )
  // }
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
