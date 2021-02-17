import React from 'react';
import './Climate.css';

const TeslaClimate = (props) => (
  <div className="climate">
    <label
      className={`climateItem ${props.value ? 'climateItemActive' : '' }  ${!props.limit ? 'heat':''}`}
    >
      <p>{props.limit ? 'ac' : 'heat'} {props.value ? 'on' : 'off'}</p>
      <i       className={`climateIcon ${props.value ? 'climateIconActive' : '' }  ${!props.limit ? 'heat':'ac'}`}
 ></i>
      <input
        type="checkbox"
        name="climate"
        checked={props.value}
        onChange={() => {props.handleChangeClimate()}}
      />
    </label>
  </div>
);

// TeslaClimate.propTypes = {
//   value: React.PropTypes.bool,
//   limit: React.PropTypes.bool,
//   handleChangeClimate: React.PropTypes.func
// }

export default TeslaClimate;