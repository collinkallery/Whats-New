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
      currentArticles: localArticles
    }
  }

  displayCurrentArticles = (articles) => {
    if (articles === 'local') {
      this.setState({currentArticles: this.state.localArticles});
    }
    if (articles === 'entertainment') {
      this.setState({currentArticles: this.state.entertainmentArticles});
    }
    if (articles === 'health') {
      this.setState({currentArticles: this.state.healthArticles});
    }
    if (articles === 'science') {
      this.setState({currentArticles: this.state.scienceArticles});
    }
    if (articles === 'tech') {
      this.setState({currentArticles: this.state.techArticles});
    }
  }

  render () {
    return (
      <div className="app">
        <Header />
        <div className="main">
          <Menu displayCurrentArticles={this.displayCurrentArticles} />
          <div className="news-container">
            <NewsContainer
              currentArticles={this.state.currentArticles}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
