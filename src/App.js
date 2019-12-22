import React, { Component } from 'react';
import axios from 'axios';

import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import NewsCard from './components/NewsCard/NewsCard';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      news: [],
      list: []
    }
  }

  test() {
    alert('test');
  }

  componentDidMount() {
    axios.get(`https://newsapi.org/v2/everything`, {
      params: {
        domains: 'wsj.com,nytimes.com',
        apiKey: '741a1f03a9bc470a8761aba57ee24731'
      }
    }).then(res => {
      const news = res.data.articles;

      const list = [
        "apple",
        "banana",
        "cat"
      ];


      this.setState({ 
        news: news,
        list: list
      });
      console.log(this.state.news);
    }).catch(err => {
      console.log(err);
    })
  }
  
  filterList(e) {
    debugger;
    let items = this.state.list;
    items = items.filter(item => {
        return item.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: items});
  }

  render() {
    return (
      <div className="App">
        <SearchBar onClick={() => this.test()} filter={() => this.filterList()}/>
        <div>
            {
                this.state.list.map(item => {
                    return <div key={item}>{item}</div>
                })
            }
        </div>

        { 
          this.state.news.map(item => <NewsCard title={item.title} description={item.description} image={item.urlToImage} name={item.source.name} date={item.publishedAt}></NewsCard>)
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
