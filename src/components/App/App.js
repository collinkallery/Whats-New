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

    this.state = {
      allArticles: allArticles,
      entertainmentArticles: entertainmentArticles,
      healthArticles: healthArticles,
      localArticles: localArticles,
      scienceArticles: scienceArticles,
      techArticles: techArticles
    }
  }

  displayArticlesByCategory = () => {
    
  }

  render () {
    return (
      <div className="app">
        <Header />
        <div className="main">
          <Menu />
          <div className="news-container">
            <NewsContainer
              all={this.state.allArticles}
              entertainment={this.state.entertainmentArticles}
              health={this.state.healthArticles}
              local={this.state.localArticles}
              science={this.state.scienceArticles}
              technology={this.state.techArticles}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
