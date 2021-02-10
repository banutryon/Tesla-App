import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator, Image } from 'react-native';
import styles from './styles';

// const teslaURL = 'http://localhost:3000/api/tesla-info';

const TeslaCar = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
      // fetching the data
  useEffect(() => {
    fetch('http://localhost:3000/api/tesla-info')
      .then((response) => response.json())
      .then((json) => setData(json.models))
      .catch((error) => alert(error))
      .finally(setLoading(false));
    });


    return (
        <SafeAreaView style={styles.carContainer}>
          
          <Image 
          source={require('../../assets/Images/m3.jpeg')}
          style={styles.tesla} />

          {isLoading ? (
          <ActivityIndicator />
           ) : (
           <FlatList
           data={data}
           keyExtractor={({ id }, index) => id}
           renderItem={({ item }) => (
                <Text>{item.model}</Text>
           )}   
          /> 
          )}
          

      </SafeAreaView>
    );
};

export default TeslaCar;

 {/* <ImageBackground
          source={require('../../assets/Images/Backdrop.jpg')}
          style={styles.stage} />  */}