import React from 'react';
import Screen from './app/components/Screen';
import { Button, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AuthNavigator from './app/navigation/AuthNavigator';
import NavigationTheme from './app/navigation/NavigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';

export default function App() {
  return (
    <React.Fragment>
      <OfflineNotice></OfflineNotice>
      <NavigationContainer theme={NavigationTheme}>
        <AppNavigator></AppNavigator>
      </NavigationContainer>
    </React.Fragment>
  );
}
