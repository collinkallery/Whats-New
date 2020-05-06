import React, {Component} from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for articles..."
          id="search-articles-input"
          name="article-search"
        />
      </div>
    )
  }
}

export default SearchForm;
