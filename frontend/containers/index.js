import React, {useState, useEffect} from 'react';
import {View, Image, Text, SafeAreaView,ScrollView} from 'react-native';
import styles from './styles';
import TeslaCar from '../component/TeslaCar/teslaCar';
import TeslaClimate from '../component/TeslaClimate/teslaClimate';
import TeslaCounter from '../component/TeslaCounter/teslaCounter';
import TeslaNotice from '../component/TeslaNotice/teslaNotice';
import TeslaStats from '../component/TeslaStats/teslaStats';
import TeslaWheels from '../component/TeslaWheels/teslaWheels';
import { render } from 'react-dom';

const BatteryContainer = (props) => {

   

    // const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [config, setconfig] = useState({speed: 55, temp: 20, climate: true, wheels: 19})
        // fetching the data
        useEffect(()=>{
          fetch('https://tesla-app-api.herokuapp.com/api/tesla-info', {
            method: 'GET',
            headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json'
            }
        })
        .then(response => { return response.json();})
        // .then(responseData => {console.log(responseData); return responseData;})
        .then(data => {setData(data)})
        // .catch(err => {
        //     console.log("fetch error" + err);
        // });
    }
         , []);
         
        //  console.log(data[0].config[0].spec["19"])
         console.log(data)

        // const modelS = data[0].models[0].model
        // const sLR = data[0].models[0].battery
        // const sEtaLong = data[0].models[0].ETArange
        // const sPlaid = data[0].models[1].battery
        // const sEtaP = data[0].models[0].ETArange
        // const sPlaidP = data[0].models[2].battery
        // const sEtaPP = data[0].models[0].ETArange
        // const climate40 = data[0].config[0].spec["19"].Off.speed["40"]
        // const speed = data[0].config[0].spec["19"].Off.speed
        // const wheelsize = data[0].config[0].spec["19"].Off.speed["40"]
        // const wheel = data[0].config[0].spec["19"]
    
    return (
        <SafeAreaView style={styles.teslaBattery}>
            
            <View style={styles.container}>

            <TeslaCar wheelsize={config.wheels} />
            {/* <TeslaClimate />
            <TeslaCounter /> */}
            
            <TeslaStats carstats={data} />
            {/* <TeslaWheels /> */}
            {/* <Text>{wheel}</Text> */}

            <TeslaNotice />
            </View>
            
        </SafeAreaView>
       
    )
    
}

export default BatteryContainer;