import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
      },
    //   stage: {
    //     top: 0,
    //     width: '100%',
    //     height: '50%',
    //     resizeMode: 'cover',
    //     position: 'absolute',
        
    //   },
      tesla: {
          top: 300,
          marginTop: -50,
          height: 230,
          resizeMode: 'contain',
      }
});

export default styles;

