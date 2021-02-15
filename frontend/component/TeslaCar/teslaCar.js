import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Image} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import nineteen from '../../assets/Wheels/wheel-19.png';
import twentyone from '../../assets/Wheels/wheel-21.png';

const TeslaCar = (props) => {
      TeslaCar.propTypes = {
      wheelsize: PropTypes.number
    }

// let icon = 
    return (
      <View>
      <ImageBackground source={require('../../assets/Images/tesla.jpg')} style={styles.teslaCar}>
       <View sytle={styles.teslaWheels}>
         <Image source={require('../../assets/Wheels/wheel-19.png')} style={[styles.teslaWheel, styles.front, props.wheelsize]}></Image>
         <Image source={require('../../assets/Wheels/wheel-19.png')} style={[styles.teslaWheel, styles.rear, props.wheelsize]}></Image>
         </View> 
         
      
          
      </ImageBackground>
      

      </View>
    );
};

export default TeslaCar;

{/* <Image 
source={require('../../assets/Images/m3.jpeg')}
style={styles.tesla} /> */}
// source={require('../../assets/Wheels/wheel-19.png')}

// source={require('../../assets/Wheels/wheel-21.png')}