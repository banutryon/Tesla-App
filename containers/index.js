import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import TeslaCar from '../component/TeslaCar';
import TeslaClimate from '../component/TeslaClimate';
import TeslaCounter from '../component/TeslaCounter';
import TeslaNotice from '../component/TeslaNotice';
import TeslaStats from '../component/TeslaStats';
import TeslaWheels from '../component/TeslaWheels';

const BatteryContainer = () => {
    return (
        <View style={styles.container}>
            <TeslaCar />
            <TeslaClimate />
            <TeslaCounter />
            <TeslaNotice />
            <TeslaStats />
            <TeslaWheels />
        </View>
       
    )
}

export default BatteryContainer;