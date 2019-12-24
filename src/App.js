import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import NewsCard from './components/NewsCard/NewsCard';
import InfiniteScroll from 'react-infinite-scroller';

let page = 0;
let totalItems = 0;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      keywords: '',
      news: [],
      filteredList: []
    }
    this.getNews = this.getNews.bind(this);
    this.filterNews = this.filterNews.bind(this);
  }

  getNews() {
    page++;
    axios.get(`https://newsapi.org/v2/everything`, {
      params: {
        // domains: 'wsj.com,nytimes.com',
        domains: 'wsj.com',
        apiKey: '741a1f03a9bc470a8761aba57ee24731',
        pageSize: 50,
        page: page
      }
    }).then(res => {
      totalItems = res.data.totalResults;
      const news = this.state.news.concat(res.data.articles);
      this.setState({
        news: news,
        filteredList: this.getFilteredList()
      });
      console.log(this.state.news);
    }).catch(err => {
      console.log(err);
    })
  }

  filterNews(val) {
    this.setState({keywords: val.toLowerCase()});
    this.setState({filteredList: this.getFilteredList()});
    console.log(this.state.filteredList);
  }

  getFilteredList() {
    let items = this.state.news;
    items = items.filter(item => {
        return (item.title.toLowerCase().search(this.state.keywords) !== -1 || item.description.toLowerCase().search(this.state.keywords) !== -1);
    });
    return items;
  }

  render() {
    return (
      <div className="App">
        <SearchBar filterNews={(val) => this.filterNews(val)}/>
        <InfiniteScroll pageStart={page} loadMore={this.getNews} hasMore={(page === 0 || (totalItems > this.state.news.length && this.state.news.length < 100))} threshold={50}>
          { 
            this.state.filteredList.map((item, index) => 
              <NewsCard key={index}
                title={item.title} 
                description={item.description} 
                image={item.urlToImage} 
                name={item.source.name} 
                date={item.publishedAt} 
                link={item.url}>
              </NewsCard>)
          }
        </InfiniteScroll>
      </div>
    );
  };
}

export default App;
