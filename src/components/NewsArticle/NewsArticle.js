import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({id, headline, img, description, url}) => {
  return (
    <article className="article-card">
      <h4 className="article-headline">{headline}</h4>
      <p className="article-description">{description}</p>
      {/*<button className="article-button">Go to article</button>*/}
      <div className="article-image-container">
        <img className="article-image" src={`${img}`}/>
      </div>
    </article>
  )
}

export default NewsArticle;
