import React from 'react';
import {View, Item,  Text, FlatList, SafeAreaView} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const TeslaStats = (props) => {
    TeslaStats.propTypes = {
    carstats: PropTypes.array
  }
   

    return (
        <SafeAreaView style={styles.container}>
     
     <FlatList
        horizontal
        data={props.carstats}
        keyExtractor={item => item.model}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>{item.model}</Text>
            <Text style={styles.listItemText}>{item.miles}</Text>
          </View>
          
        )}
      />
    
    </SafeAreaView>
    )
    
}

export default TeslaStats;