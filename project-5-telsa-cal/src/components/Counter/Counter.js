import React from 'react';
import './Counter.css';

const Counter = ({ initValues, currentValue, increment, decrement }) => (
  <div className="counter">
    <p className="counterTitle">{initValues.title}</p>
    <div className="counterContainer cf">
      <div className="counterItem">
        <p className="counterNumber">
          { currentValue }
          <span>{ initValues.unit }</span>
        </p>
        <div className="counterControls">
          <button 
            onClick={(e) => {
              e.preventDefault();
              increment(currentValue)}}            
              disabled={currentValue >= initValues.max} 
          >
          </button>
          <button 
            onClick={(e) => {
              e.preventDefault();
              decrement(currentValue)}}            
              disabled={currentValue <= initValues.min} 
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

export default Counter;