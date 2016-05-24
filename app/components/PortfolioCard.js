import React, { Component, PropTypes } from 'react';
import './PortfolioCard.scss';

class PortfolioCard extends Component {
  state = {
    hover: false,
  };

  mouseOver = () => {
    this.setState({
      hover: true,
    });
  }

  mouseOut = () => {
    this.setState({
      hover: false,
    });
  }

  renderImage() {
    return (
      <img
        className="portfolio-card-img"
        role="presentation"
        src={this.props.imageUrl}
      />
    );
  }

  renderText() {
    return (
      <h2 className="portfolio-card-text">
        {this.props.text}
      </h2>
    );
  }

  render() {
    return (
      <div
        className="portfolio-card"
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
      >
        {this.state.hover ? this.renderText() : this.renderImage()}
      </div>
    );
  }
}

PortfolioCard.propTypes = {
  linkUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default PortfolioCard;
