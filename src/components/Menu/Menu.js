import React from 'react';
import './Menu.css'

const Menu = () => {
  return (
    <section id="menu-container">
      <button
        className="menu-button"
        id="local-button">Local News
      </button>
      <button
        className="menu-button"
        id="entertainment-button">Entertainment
      </button>
      <button
        className="menu-button"
        id="health-button">Health
      </button>
      <button
        className="menu-button"
        id="science-button">Science
      </button>
      <button
        className="menu-button"
        id="tech-button">Technology
      </button>
    </section>
  )
}

export default Menu;
