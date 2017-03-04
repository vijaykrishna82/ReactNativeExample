import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


export default class Login extends Component{
    render(){
        return(
                <View style={styles.container}>
                    <Image style={styles.logo} source={require('./Octocat.png')}/>
                   <Text> Login Component </Text>
                </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00DDFF',
        borderColor: '#000000',
        borderStyle: 'dashed',
        borderWidth: 1,
        flex: 1
    }
});


module.exports = Login;