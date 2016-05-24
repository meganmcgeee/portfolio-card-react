import './Index.scss';
import PortfolioCard from './PortfolioCard';
import React from 'react';
import airlugg from './img/airlugg.png';

export default () => (
  <div className="index">
    <h3>Porfolio Card component made with React.js.</h3>
    <PortfolioCard
      hoverText="Airlugg"
      imageUrl={airlugg}
      linkUrl="http://megabit.rocks"
      text="Not hovering"
    />,
  </div>
);
