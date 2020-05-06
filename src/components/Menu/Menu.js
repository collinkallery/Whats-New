import React from 'react';
import './Menu.css'

const Menu = ({displayCurrentArticles}) => {
  return (
    <section id="menu-container">
      <button
        onClick={() => displayCurrentArticles('local')}
        className="menu-button"
        id="local-button">Local News
      </button>
      <button
        onClick={() => displayCurrentArticles('entertainment')}
        className="menu-button"
        id="entertainment-button">Entertainment
      </button>
      <button
        onClick={() => displayCurrentArticles('health')}
        className="menu-button"
        id="health-button">Health
      </button>
      <button
        onClick={() => displayCurrentArticles('science')}
        className="menu-button"
        id="science-button">Science
      </button>
      <button
        onClick={() => displayCurrentArticles('tech')}
        className="menu-button"
        id="tech-button">Technology
      </button>
    </section>
  )
}

export default Menu;
