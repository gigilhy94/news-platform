import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import NewsCard from './components/NewsCard/NewsCard';
import InfiniteScroll from 'react-infinite-scroller';

const maxNews = 100;  // maximun result can be retrieved
const perPage = 9;
let page = 0;
let accmulate = 0;

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
    let remainItems = maxNews - accmulate;
    if (remainItems > 0) {
      let numOfItems = (remainItems >= perPage)? perPage : remainItems;
      axios.get(`https://newsapi.org/v2/everything`, {
        params: {
          domains: 'wsj.com,nytimes.com',
          apiKey: '741a1f03a9bc470a8761aba57ee24731',
          pageSize: numOfItems,
          page: page
        }
      }).then(res => {
        if (res.data.totalResults < maxNews) maxNews = res.data.totalResults;
        accmulate += res.data.articles.length;
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
        <InfiniteScroll pageStart={page} loadMore={this.getNews} hasMore={(page === 0 || accmulate < maxNews)} threshold={50}>
          <div className="container">
            { 
              this.state.filteredList.map((item, index) => 
                <NewsCard key={index}
                  title={item.title} 
                  description={item.description} 
                  image={item.urlToImage} 
                  name={item.source.name} 
                  date={item.publishedAt} 
                  link={item.url}>
                </NewsCard>
              )
            }
          </div>
        </InfiniteScroll>
      </div>
    );
  };
}

export default App;
