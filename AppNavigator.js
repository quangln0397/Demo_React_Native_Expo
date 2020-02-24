import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import MainScreen from './screens/MainScreen';
import SettingScreen from './screens/SettingScreen';
const Tab = createBottomTabNavigator();

export default function AppTabs() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={MainScreen}>

            </Tab.Screen>
            <Tab.Screen name="Setting" component={SettingScreen}>
            
            </Tab.Screen>
        </Tab.Navigator>
    )
}