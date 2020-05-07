import React, {Component} from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
  }

  handleChange = (event) => {
    this.setState({searchValue: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.filterArticles(this.state.searchValue);
    this.setState({searchValue: ''});
  }

  render() {
    return (
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for articles..."
          id="search-articles-input"
          name="article-search"
          onChange={this.handleChange}
          value={this.state.searchValue}
        />
        <button
          id="search-button"
          onClick={this.handleSubmit}>Search</button>
      </div>
    )
  }
}

export default SearchForm;
