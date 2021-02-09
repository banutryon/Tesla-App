import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './component/Header';
import BatteryContainer from './containers'
// import TeslaCar from './component/TeslaCar';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <BatteryContainer />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
