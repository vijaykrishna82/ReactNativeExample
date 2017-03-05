import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';


export default class Login extends Component{
    render(){
        return(
                <View style={styles.container}>
                   <Image style={styles.logo} source={require('./Images/Octocat.png')}/>
                   <Text style={styles.heading}> Github Browser </Text>
                   <TextInput style={styles.input} autoFocus="true" keyboardType="email-address"  placeholder="Github Username"/>
                   <TextInput style={styles.input} secureTextEntry='true'  placeholder="Github Password"/>
                
                </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00EE55',
        borderColor: '#000000',
        borderStyle: 'solid',
        borderWidth: 1,
        flex: 1,
        paddingTop: 100,
        alignItems: 'center'
    },
    logo:{
        width: 66,
        height: 55
    },
    heading:{
        fontSize:30
    },
    input:{
        height:40,
        marginTop:20,
        marginLeft:30,
        marginRight:30,
        borderColor: '#000000',
        borderStyle: 'solid',
        backgroundColor: '#ffffff',
        paddingLeft:10

    }

    
});


module.exports = Login;