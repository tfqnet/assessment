import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CreateUserScreen from '../components/CreateUser';
import HomeScreen from './home';
import UserScreen from './user';
const StackNavigator = createStackNavigator({
    Home: HomeScreen,
    User: UserScreen,
    Create: CreateUserScreen,
});
export default createAppContainer(StackNavigator);