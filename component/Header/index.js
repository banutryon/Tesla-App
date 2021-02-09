import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

const Header = () => {
    return (
        <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/Images/logo.png')}/>
        
        </View>
    )
}

export default Header;