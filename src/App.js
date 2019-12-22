import React, { Component } from 'react';
import axios from 'axios';

import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import NewsCard from './components/NewsCard/NewsCard';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      news: []
    }
    this.filterNews = this.filterNews.bind(this);
  }

  componentDidMount() {
    axios.get(`https://newsapi.org/v2/everything`, {
      params: {
        domains: 'wsj.com,nytimes.com',
        apiKey: '741a1f03a9bc470a8761aba57ee24731'
      }
    }).then(res => {
      const news = res.data.articles;
      this.setState({ 
        news: news
      });
      console.log(this.state.news);
    }).catch(err => {
      console.log(err);
    })
  }

  filterNews(e) {
    let items = this.state.news;
    let keywords = e.target.value.toLowerCase();
    items = items.filter(item => {
        return (item.title.toLowerCase().search(keywords) !== -1 || item.description.toLowerCase().search(keywords) !== -1);
    });
    this.setState({news: items});
  }

  render() {
    return (
      <div className="App">
        <SearchBar filterNews={(e) => this.filterNews(e)}/>
        { 
          this.state.news.map(item => 
            <NewsCard title={item.title} 
              description={item.description} 
              image={item.urlToImage} 
              name={item.source.name} 
              date={item.publishedAt} 
              link={item.url}>
            </NewsCard>)
        }

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  };
}

export default App;
