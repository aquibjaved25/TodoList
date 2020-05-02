import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const LoginNavigator = createStackNavigator({

    Login:LoginScreen,
    Home:HomeScreen
});

export default createAppContainer(LoginNavigator);