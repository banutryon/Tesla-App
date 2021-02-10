import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        top: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green',
       
      },
      acOff: {
          position: 'absolute', 
          top: -20,
          marginTop: 10,
         
      }, 
      text: {
        position: 'absolute',
        color: 'black',
        fontSize: 20,
        

      }
});

export default styles;