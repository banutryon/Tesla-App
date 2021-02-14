import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import AcOff from '../../assets/climate/ac-off.svg';
import PropTypes from 'prop-types';

const Climate = (props) => {
    Climate.propTypes = {
        value: PropTypes.bool,
        limit: PropTypes.bool,
        handleChangeClimate: PropTypes.func
      }

    return (
        <View style={styles.container}>
        
        <TouchableOpacity
        style={`teslaClimate__item ${props.value ? 'teslaClimate__itemActive' : '' }  ${!props.limit ? 'teslaHeat':''}`}
        type="checkbox"
        name="climate"
        checked={props.value}
        onChange={() => {props.handleChangeClimate()}}
        >
            <View style={styles.button}>
            <Text style={styles.text}>{props.limit ? 'ac' : 'heat'} {props.value ? 'on' : 'off'}</Text>
            <AcOff
            style={styles.acOff}
            width={120} height={40} />
            <View style={styles.climate}>
            </View>
            </View>
        </TouchableOpacity>
        </View>
        
    )
}

export default Climate;