import React from 'react';
import { Text, View, StatusBar } from 'react-native';

export default class MainScreen extends React.Component {
    render() {
        return (
            <View style={{ marginTop: 20 }}>
                <StatusBar
                    barStyle="dark-content"
                />
                <Text>Đây là Main Screen</Text>
                <Text>Chào</Text>
            </View>
        );
    }
};
