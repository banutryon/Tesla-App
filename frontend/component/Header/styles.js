import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    backgroundColor: 'red',

  },
  logo: {
    top: 10,
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  range: {
    justifyContent: 'center',
    fontSize: 26,
    fontWeight: '500',
    marginTop: -30,
  },
});

export default styles;