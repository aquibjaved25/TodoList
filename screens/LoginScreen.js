import React, { useState } from 'react';
import {View,StyleSheet, Button,Alert} from 'react-native';
import Input from '../components/Input';


const LoginScreen = props => {

    const [eneteredName, setEnteredName] = useState('');
    const [eneteredPassword, setEnteredPassword] = useState('');

    const numberInputHandler = inputtext =>{
        setEnteredName(inputtext);
    };

    const passwordInputHandler = inputpassword =>{
        setEnteredPassword(inputpassword);
    };

const loginInputHandler = () => {

    if(eneteredName.length === 0 ){
        Alert.alert(
            "Username Empty",
            "Please Enter username",
            [
              { text: "OK", 
              style: "cancel",
              onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
      
        return;
    }

    if(eneteredPassword.length === 0 ){
        Alert.alert(
            "Password Empty",
            "Password must not be empty",
            [
              { text: "OK", 
              style: "cancel",
              onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
      
        return;
    }

    if(eneteredPassword.length < 8 ){
        Alert.alert(
            "Password is short",
            "Password size must be greater than 7",
            [
              { text: "OK", 
              style: "cancel",
              onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
      
        return;
    }

    props.navigation.navigate({ routeName: 'Home' })
};
   

    return(
        <View style = {styles.screen} >  
        
        <Input style = {styles.input} 
        placeholder = "username" 
        onChangeText = {numberInputHandler}
        value = {eneteredName}/>
        
        <Input style = {styles.input} 
        placeholder = "password"
        onChangeText = {passwordInputHandler}
        value = {eneteredPassword}
        maxLength = {8} />
        
        <Button title = "LOGIN"
        style = {styles.button}
        onPress = {loginInputHandler} />
        </View>
    );
};

const styles = StyleSheet.create({

    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        
    },
    input:{
        width:'80%',
        textAlign:'center'
    },

    button:{
        marginTop:15,
        width:'80%',
        textAlign:'center'
    }

});

export default LoginScreen;