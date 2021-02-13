import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    padding: 25,
    position: 'absolute',
    top: -30,

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
    fontWeight: '300',
    marginTop: -15,
  },
});

export default styles;