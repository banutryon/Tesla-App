import React from 'react';
import './Counter.css';

const TeslaCounter = (props) => (
  <div className="counter">
    <p className="counterTitle">{props.initValues.title}</p>
    <div className="counterContainer cf">
      <div className="counterItem">
        <p className="counterNumber">
          { props.currentValue }
          <span>{ props.initValues.unit }</span>
        </p>
        <div className="counterControls">
          <button 
            onClick={(e) => props.increment(e, props.initValues.title)} 
            disabled={props.currentValue >= props.initValues.max} 
          >
          </button>
          <button 
            onClick={(e) => props.decrement(e, props.initValues.title)} 
            disabled={props.currentValue <= props.initValues.min} 
          >
          </button>
        </div>
      </div>
    </div>
  </div>  
);

// TeslaCounter.propTypes = {
//   currentValue: React.PropTypes.number,
//   increment: React.PropTypes.func,
//   decrement: React.PropTypes.func,
//   initValues: React.PropTypes.object
// }

export default TeslaCounter;