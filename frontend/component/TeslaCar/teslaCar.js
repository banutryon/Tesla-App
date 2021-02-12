import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator, Image} from 'react-native';
import styles from './styles';

// const teslaURL = 'http://localhost:3000/api/tesla-info';

const TeslaCar = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
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
      .then(responseData => {console.log(responseData); return responseData;})
      .then(data => {setData(data)})
      .catch(err => {
          console.log("fetch error" + err);
      });
  }
       , []);


    return (
        <SafeAreaView style={styles.carContainer}>
          
          <Image 
          source={require('../../assets/Images/m3.jpeg')}
          style={styles.tesla} />
          <Text>Model {data[0].models[0].model}</Text>
          <Text>{data[0].models[0].battery}</Text>
          <Text>{data[0].models[0].ETArange}</Text>
          <Text>{data[0].models[1].battery}</Text>
          <Text>{data[0].models[1].ETArange}</Text>
          <Text>{data[0].models[2].battery}</Text>
          <Text>{data[0].models[1].ETArange}</Text>
          
          

       
          

      </SafeAreaView>
    );
};

export default TeslaCar;

 