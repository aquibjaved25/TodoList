/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import LoginNavigator from './navigation/LoginNavigation';

export default function App(){
  return(
    <LoginNavigator/>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
