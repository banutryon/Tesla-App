import React, {useState, useEffect} from 'react';
import {View, Image, Text, SafeAreaView,ScrollView,} from 'react-native';
import styles from './styles';
import TeslaCar from '../component/TeslaCar/teslaCar';
import TeslaClimate from '../component/TeslaClimate/teslaClimate';
import TeslaCounter from '../component/TeslaCounter/teslaCounter';
import TeslaNotice from '../component/TeslaNotice/teslaNotice';
import TeslaStats from '../component/TeslaStats/teslaStats';
import TeslaWheels from '../component/TeslaWheels/teslaWheels';
import { getData } from '../service/seed';


const BatteryContainer = (props) => {
    const [carstats,setCarstats] = useState([]);
    const [config, setConfig] = useState({speed: 65, temperature: 32, climate: true, wheels: 21})

    const calculateStats = (models, value) => {
        const dataModels = getData();
        return models.map(model => {
        const { speed, temperature, climate, wheels } = value;
        
        const miles = dataModels[model][wheels][climate === 'On' || 'Off'].speed[speed][temperature];
        // console.log(dataModels[1])
        console.log(models)
        // console.log(miles)
        return {
            model,
            miles
        };
        });
    }
    console.log(calculateStats)
    const statsUpdate = () => {
        const carModels = ['LongRange', 'Plaid', 'Plaid+'];
    // Fetch model info from BatteryService and calculate then update state
        setCarstats(calculateStats(carModels, config));
        // console.log(carModels)
    }

    const updateCounterState = (title, newValue) => {
        const config_ = { ...config };
        // update config state with new value
        title === 'Speed' ? config_['speed'] = newValue : config_['temperature'] =  newValue;
        // update our state
        setConfig(config_);
    }
   
    
     
    const increment = (e, title) => {
        e.preventDefault();
        let currentValue, maxValue, step;
        const { speed, temperature } = props.counterDefaultVal;
        if (title === 'Speed') {
          currentValue = config.speed;
          maxValue = speed.max;
          step = speed.step;
        } else {
          currentValue = config.temperature;
          maxValue = temperature.max;
          step = temperature.step;
        }
    
        if (currentValue < maxValue) {
          const newValue = currentValue + step;
          updateCounterState(title, newValue);
        }
        
        // console.log(currentValue)

      }
      const decrement = (e, title) => {
        e.preventDefault();
        let currentValue, minValue, step;
        const { speed, temperature } = props.counterDefaultVal;
        if (title === 'Speed') {
          currentValue = config.speed;
          minValue = speed.min;
          step = speed.step;
        } else {
          currentValue = config.temperature;
          minValue = temperature.min;
          step = temperature.step;
        }
    
        if (currentValue > minValue) {
          const newValue = currentValue - step;
          updateCounterState(title, newValue);
        }
      }

        // handle aircon & heating click event handler
        const handleChangeClimate = () => {
            const config_ = {...config};
            config_['climate'] = !config_.climate;
            set({ config_ }, () => {statsUpdate()});
          };
        
          // handle Wheels click event handler
          const handleChangeWheels = (size) => {
            const config_ = {...config};
            config_['wheels'] = size;
            setState({ config_ }, () => {statsUpdate()});
          }  

          useEffect(()=>{
            statsUpdate();
        },[config])

    return (
        <SafeAreaView style={styles.teslaBattery}>
            {/* <TeslaCar 
            wheelsize={config.wheels}
             /> */}
            {/* <TeslaStats carstats={carstats} />  */}
            <View style={styles.teslaControls}>
            <TeslaCounter
            currentValue={config.speed}
            initValues={props.counterDefaultVal.speed}
            increment={increment}
            decrement={decrement} />
            <View style={styles.teslaClimateContainer}>
            {/* <TeslaCounter
              currentValue={config.temperature}
              initValues={props.counterDefaultVal.temperature}
              increment={increment}
              decrement={decrement} /> */}
            {/* <TeslaClimate value={config.climate}
              limit={config.temperature > 10}
              handleChangeClimate={handleChangeClimate} /> */}
            </View>
            {/* <TeslaWheels 
            value={config.wheels}
            handleChangeWheels={handleChangeWheels}/> */}
            </View>
            {/* <TeslaNotice /> */}
        </SafeAreaView>
       
    )
    
}

export default BatteryContainer;



