import React from 'react';
import {View, Image, Text, FlatList} from 'react-native';
import styles from './styles';

const TeslaStats = (props) => {
    // const listItems = props.data.map((stat) => {
    //     <FlatList key={stat.model}>
    //         <Text style={styles.teslaStatsIcon, styles.teslaStatsIcon.stat.model}></Text>
    //         <Text>{stat.miles}</Text>
    //     </FlatList>
    // })
    return (
        <View style={styles.teslaStats}>
            {/* <FlatList>{listItems}</FlatList> */}
        </View>
    )
}
// TeslaStats.propTypes = {
//     carstats: React.PropTypes.array
//   }
export default TeslaStats;