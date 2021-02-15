import React from 'react';
import {View, Image, Text, Button, StyledButton} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const Counter = (props) => {
    Counter.propTypes = {
        currentValue: PropTypes.number,
        increment: PropTypes.func,
        decrement: PropTypes.func,
        initValues: PropTypes.object
      }
    return (
        <View style={styles.counter}>
            <Text style={styles.containerTitle}>{props.initValues.title}</Text>
        <View style={styles.item}>
            <View style={styles.container}>
                <Text style={styles.currentValue}>{ props.currentValue }
                <Text style={styles.unit}>{ props.initValues.unit }</Text></Text>
                
            <View>
            
            <Button style={{flex:1,flexDirection: 'column', padding: 20, height: 50}}
            onPress={(e) => props.increment(e, props.initValues.title)} 
            disabled={props.currentValue >= props.initValues.max}
            title="up"
          ></Button>
          <Button style={{flex:1,flexDirection: 'column', padding: 20, height: 50, width: 20,}}
            onPress= {
            (e) => props.decrement(e, props.initValues.title)
          }
            title="down"
          >
          </Button>
          
            </View>
            </View>
        </View>
        </View>
    )
}

export default Counter;