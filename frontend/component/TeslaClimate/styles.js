import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
        
      },
      acOff: {
          position: 'relative', 
          top: -400,
      }
});

export default styles;