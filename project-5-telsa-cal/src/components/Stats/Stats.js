import React from 'react';
import './Stats.css';

const TeslaStats = (props) => {
  const listItems = props.carstats.map((stat) => (
    <li key={stat.model}>
      <p className="model">{stat.model}</p>
      <p className="miles">{stat.miles}</p>
      
    </li>
  ));
  return (
    <div className="stats">
    <ul>
      {listItems}  
    </ul>
  </div>
  )
};


// TeslaStats.propTypes = {
//   carstats: React.PropTypes.array
// }

export default TeslaStats