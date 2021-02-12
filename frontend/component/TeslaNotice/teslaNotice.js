import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

const Notice = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.notice}> The actual amount of range that you experience will vary based
      on your particular use conditions. See how particular use conditions
      may affect your range in our simulation model.</Text>
            <Text style={styles.notice}> Vehicle range may vary depending on the vehicle configuration,
      battery age and condition, driving style and operating, environmental
      and climate conditions.</Text>
        </View>
    )
}

export default Notice;