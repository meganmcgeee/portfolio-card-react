import React from 'react';
import ReactDOM from 'react-dom';
import './PortfolioCard.scss';

const PortfolioCard = (imageUrl, text, linkUrl) => (
  <div className="portfolio-card">
    <h2 className="portfolio-card-text">{text}{linkUrl}</h2>
    <img className="portfolio-card-img" src={imageUrl} role="presentation" />
  </div>
);


ReactDOM.render(
  <PortfolioCard />,
);
export default PortfolioCard;
