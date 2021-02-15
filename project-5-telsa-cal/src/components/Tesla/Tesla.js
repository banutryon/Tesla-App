import React from 'react';
import './Tesla.css';
import modelS from '../../assets/Images/ModelS.png'
import model3 from '../../assets/Images/Model3.png'
import modelY from '../../assets/Images/ModelY.png'
import modelX from '../../assets/Images/ModelX.png'
 import stage from '../../assets/Images/Backdrop.jpg'





const TeslaCar = (props) => (
  <div className="container">
    <div className="stage">
    <img className="img" src={stage} alt="stage" />
      <h1>Estimated Range Per Charge</h1>
    
      <div className="tesla">
      <div className="tesla-wheels">
        <div className={`wheel front wheel--${props.wheelsize}`}></div>
        <div className={`wheel rear wheel--${props.wheelsize}`}></div>
      </div>
      </div>
    </div>
  </div>
);



export default TeslaCar;



