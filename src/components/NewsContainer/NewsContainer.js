import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';
import SearchForm from '../SearchForm/SearchForm';
import './NewsContainer.css'

const NewsContainer = ({currentArticles}) => {

  const articlesToDisplay = currentArticles.map(article => {
    return (
      <NewsArticle
        id={article.id}
        headline={article.headline}
        img={article.img}
        description={article.description}
        url={article.url}
        key={article.id}
      />
    )
  })

  return (
    <div className="article-search-container">
      <SearchForm />
      <div className="article-container">
        {articlesToDisplay}
        </div>
    </div>
  )
}

export default NewsContainer;
