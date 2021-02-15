import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

const LabelLists = (props) => {
    const value = props.wheels.value;
    const changeHandler = props.wheels.handleChangeWheels;
    const sizes = [19, 21];
    const LabelItems = sizes.map(size => (
      <View key={size} className={`tesla-wheels__item tesla-wheels__item--${size} ${value === size ? 'tesla-wheels__item--active' : '' }`}>
        <input
          type="radio"
          name="wheelsize"
          value={size}
          checked={value === size} 
          onChange={() => {changeHandler(size)}} />
        <Text>
          {size}"
        </Text>
      </View> 
      )
    );
    return (
      <View>
        {LabelItems}
      </View>
    );
  }
  const TeslaWheels = (props) => (
    <div className="tesla-wheels__component">
      <p className="tesla-wheels__title">Wheels</p>
      <div className="tesla-wheels__container cf">
        <LabelLists wheels={props}/>
      </div>
    </div>
  );

export default Wheels;