import React, { PropTypes } from 'react';
import './PortfolioCard.scss';

const PortfolioCard = ({ imageUrl, text, linkUrl }) => (
  getInitialState: () => {
      hover: false
    },

  mouseOver: () => {
    this.setState({
      hover: true
      text: "I flipped"
    });
  },

  mouseOut: () => {
    this.setState({
      hover:false
      text: "I unflipped"
    });
  },
  <div className="portfolio-card"
    onMouseOver={this.mouseOver}
    onMouseOut={this.mouseOut} >
    <h2 className="portfolio-card-text">{text}</h2>
    <img className="portfolio-card-img" src={imageUrl} role="presentation" />
  </div>
);

PortfolioCard.propTypes = {
  linkUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default PortfolioCard;
