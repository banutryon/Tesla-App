import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

const Climate = () => {
    return (
        <View style={styles.container}>
            {/* <Image 
            source={require('../../assets/climate/ac-off.svg')}
            style={styles.acOn} /> */}

            <Text>Climate</Text>
        </View>
    )
}

export default Climate;