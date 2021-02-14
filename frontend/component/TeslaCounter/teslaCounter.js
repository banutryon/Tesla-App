import React from 'react';
import {View, Image, Text, Button} from 'react-native';
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
            onClick={(e) => props.increment(e, props.initValues.title)} 
            disabled={props.currentValue >= props.initValues.max}
            title="up"
          >Up</Button>
          <Button style={{flex:1,flexDirection: 'column', padding: 20, height: 50, width: 20,}}
            onClick={(e) => props.decrement(e, props.initValues.title)} 
            disabled={props.currentValue <= props.initValues.min} 
            title="down"
          >Down
          </Button>
          <Text>Test</Text>
            </View>
            </View>
        </View>
        </View>
    )
}

export default Counter;