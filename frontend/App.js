import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import Header from './component/Header';
import BatteryContainer from './containers'
// import TeslaCar from './component/TeslaCar';

const teslaURL = 'http://localhost:3000/api/tesla-info';
export default function App() {
  const [isLoading, setLoading] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <BatteryContainer />
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});
