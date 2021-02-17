import React from 'react';
import './Wheels.css';

const LabelLists = (props) => {
  const value = props.wheels.value;
  const changeHandler = props.wheels.ChangeWheels;
  const sizes = [19, 21];
  const LabelWheels = sizes.map(size => (
    <label key={size} className={`wheelsItem wheelsItem--${size} ${value === size ? 'wheelsItem--active' : '' }`}>
      <input
        type="radio"
        name="wheelsize"
        value={size}
        checked={value === size} 
        onChange={() => {changeHandler(size)}} />
      <p>
        {size}"
      </p>
    </label> 
    )
  );
  return (
    <div>
      {LabelWheels}
    </div>
  );
}
const TeslaWheels = (props) => (
  <div className="wheels__component">
    <p className="wheels__title">Wheels</p>
    <div className="wheels__container cf">
      <LabelLists wheels={props}/>
    </div>
  </div>
);
// TeslaWheels.propTypes = {
//   value: React.PropTypes.number,
//   handleChangeWheels: React.PropTypes.func
// }
export default TeslaWheels;