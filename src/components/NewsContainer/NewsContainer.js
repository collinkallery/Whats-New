import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';
import SearchForm from '../SearchForm/SearchForm';
import './NewsContainer.css'

const NewsContainer = ({all, entertainment, health, local, science, technology}) => {

  const localArticles = local.map(article => {
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
        {localArticles}
        </div>
    </div>
  )
}

export default NewsContainer;
