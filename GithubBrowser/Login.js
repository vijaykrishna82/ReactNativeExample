import React, { Component } from 'react';
import Buffer from 'buffer';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';


export default class Login extends Component{

    constructor(props){
        
        super(props);
        this.state = {
            showProgress:false
        };
    }

    render(){
        return(
                <View style={styles.container}>
                   <Image style={styles.logo} source={require('./Images/Octocat.png')}/>
                   <Text style={styles.heading}> GitHub Browser </Text>
                   <TextInput 
                        onChangeText={(text)=>this.setState({username:text})}
                        style={styles.input} 
                        autoFocus={true} 
                        keyboardType="email-address"  
                        placeholder="Github Username"/>
                   <TextInput 
                        onChangeText={(text)=>this.setState({password:text})}
                        style={styles.input} 
                        secureTextEntry={true}  
                        placeholder="Github Password"/>
                
                   <TouchableHighlight style={styles.button} onPress={this.onLoginPressed.bind(this)}>
                       <Text style={styles.buttonText} >Login</Text>
                   </TouchableHighlight>

                   <ActivityIndicator animating={this.state.showProgress} size="large" style={styles.progress}/>

                </View>


        );
    }

    onLoginPressed(){
        
        var usernamePassword = this.state.username + ":" + this.state.password;
        var b = new Buffer.Buffer(usernamePassword);
        var base64UserNamePassword= b.toString('base64');
        console.log("base64:" + base64UserNamePassword);

        this.setState({showProgress: true});
        fetch('https://api.github.com/user',{
            headers:{
                'Authorization' : 'Basic ' + base64UserNamePassword
            }
        }).then((response)=>{
            return response.json();
        })
        .then((results)=>{
            console.log(results);
            this.setState({showProgress: false});
        });
        
    }

    onGetRepositories(){
        this.setState({showProgress: true});

        fetch('https://api.github.com/search/repositories?q=react')
        .then((response)=>{
            return response.json();
        })
        .then((results)=>{
            console.log(results);
            this.setState({showProgress: false});
        });
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
        alignItems: 'center',
        padding:30
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
        borderColor: '#000000',
        borderStyle: 'solid',
        backgroundColor: '#ffffff',
        paddingLeft:10

    },
    button:{
        height:50,
        backgroundColor: '#ffff00',
        alignSelf: 'stretch',
        marginTop: 20,
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        
    },
    buttonText:{
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: 'bold'
    },

    progress:{
        marginTop:20
    }
    
});


module.exports = Login;