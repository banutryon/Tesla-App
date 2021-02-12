import React from 'react';
import {View, Image, Text, SafeAreaView,ScrollView} from 'react-native';
import styles from './styles';
import TeslaCar from '../component/TeslaCar/teslaCar';
import TeslaClimate from '../component/TeslaClimate/teslaClimate';
import TeslaCounter from '../component/TeslaCounter/teslaCounter';
import TeslaNotice from '../component/TeslaNotice/teslaNotice';
import TeslaStats from '../component/TeslaStats/teslaStats';
import TeslaWheels from '../component/TeslaWheels/teslaWheels';

const BatteryContainer = () => {
    return (
        <View >
            <ScrollView>
            <View style={styles.container}>
            
            <TeslaCar />
            <TeslaClimate />
            <TeslaCounter />
            
            <TeslaStats />
            <TeslaWheels />
            <TeslaNotice />
            </View>
            </ScrollView>
        </View>
       
    )
}

export default BatteryContainer;