import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class AboutScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('name'),
            headerStyle: {
                backgroundColor: '#00a4db',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontSize:16,
                color:'#fff',
            }
        };
      };

    componentDidMount(){
        const { navigation } = this.props ;
        let id = navigation.getParam('id');
        let age = navigation.getParam('name');
        console.log(this);
    }

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>About Screen</Text>
            <Button
                title="Go to Self"
                onPress={() => {this.props.navigation.push('About')}}
            />
            <Button
                title="Go to Store"
                onPress={() => this.props.navigation.navigate('Store')}
            />
            <Button
                title="Go back"
                onPress={() => this.props.navigation.goBack()}
            />
            <Button
                title="set the title"
                onPress={() => {
                    console.log('哈哈哈');
                    this.props.navigation.setParams({name: '吴志祥'})
                }}
            />
        </View>
      );
    }
}