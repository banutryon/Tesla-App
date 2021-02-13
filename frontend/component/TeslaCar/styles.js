import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    
    teslaCar: {
      width: '100%',
      minHeight: 230,
      bottom: 50,
      
      },
      teslaWheels: {
        height: 100,
        width: 100,
        position: 'relative',
        justifyContent: 'center',
         
      }, 
      teslaWheel: {
        height: 53,
        width: 53,
        top: 110,
        position: 'absolute',
      }, 
      front: {
        left: 67,
      },
      rear: {
        right: 77,
      }
});

export default styles;

