import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import Header from '../Header/Header';
// import SearchForm from '../SearchForm/SearchForm';
import Menu from '../Menu/Menu';
import NewsContainer from '../NewsContainer/NewsContainer';
import Entertainment from '../../data/entertainment';
import Health from '../../data/health';
import Local from '../../data/local';
import Science from '../../data/science';
import Technology from '../../data/technology';

class App extends Component {
  constructor() {
    super();

    const allArticles = [...Entertainment, ...Health, ...Local, ...Science, ...Technology];
    const entertainmentArticles = [...Entertainment];
    const healthArticles = [...Health];
    const localArticles = [...Local];
    const scienceArticles = [...Science];
    const techArticles = [...Technology];
    const currentArticles = [];

    this.state = {
      allArticles: allArticles,
      entertainmentArticles: entertainmentArticles,
      healthArticles: healthArticles,
      localArticles: localArticles,
      scienceArticles: scienceArticles,
      techArticles: techArticles,
      currentArticles: localArticles,
      searchedArticles: ''
    }
  }

  displayCurrentArticles = (articles) => {
    let articlesToDisplay = null;
    if (articles === 'local') {
      articlesToDisplay = this.state.localArticles;
    } else if (articles === 'entertainment') {
      articlesToDisplay = this.state.entertainmentArticles;
    } else if (articles === 'health') {
      articlesToDisplay = this.state.healthArticles;
    } else if (articles === 'science') {
      articlesToDisplay = this.state.scienceArticles;
    } else if (articles === 'tech') {
      articlesToDisplay = this.state.techArticles;
    } else {
      articlesToDisplay = this.state.localArticles;
    }
    this.setState({
      currentArticles: articlesToDisplay,
      searchedArticles: articles
    })
  }

  filterArticles = (searchValue) => {
    this.displayCurrentArticles(this.state.searchedArticles);
    let filteredArticles = [];
    let currentArticles = this.state.currentArticles;
    currentArticles.forEach(article => {
      if (article.headline.toLowerCase().includes(searchValue.toLowerCase())) {
        filteredArticles.push(article);
      }
      this.setState({currentArticles: filteredArticles})
    })
  }

  render () {
    return (
      <div className="app">
        <Header />
        <div className="main">
          <Menu
            displayCurrentArticles={this.displayCurrentArticles}
          />
          <div className="news-container">
            <NewsContainer
              currentArticles={this.state.currentArticles}
              filterArticles={this.filterArticles}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
