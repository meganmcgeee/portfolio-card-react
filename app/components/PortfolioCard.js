import React, { PropTypes } from 'react';
import './PortfolioCard.scss';

const PortfolioCard = ({ imageUrl, text, linkUrl }) => (
  <div className="portfolio-card">
    <h2 className="portfolio-card-text">{text}{linkUrl}</h2>
    <img className="portfolio-card-img" src={imageUrl} role="presentation" />
  </div>
);

PortfolioCard.propTypes = {
  linkUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default PortfolioCard;
