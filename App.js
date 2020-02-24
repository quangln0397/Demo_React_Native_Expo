import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppTabs from './AppNavigator';
import MainScreen from './screens/MainScreen';

export default function App() {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
}
