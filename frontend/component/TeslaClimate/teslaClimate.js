import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import AcOff from '../../assets/climate/ac-off.svg';

const Climate = () => {
    return (
        <View style={styles.container}>
            <AcOff
            style={styles.acOff}
            width={120} height={40} />
            <Text style={styles.text}>Climate</Text>
        </View>
    )
}

export default Climate;