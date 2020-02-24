import React from 'react';
import { Text, View, StatusBar } from 'react-native';

export default class SettingScreen extends React.Component {
    render() {
        return (
            <View style={{ marginTop: 20 }}>
                <StatusBar
                    barStyle="dark-content"
                />
                <Text>Đây là Setting</Text>
                <Text>Chào</Text>
            </View>
        );
    }
};
