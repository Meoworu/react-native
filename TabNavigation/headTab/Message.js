import React, { Component } from 'react';
import { View , Text } from 'react-native';


export default class Message extends Component {
    render(){
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:24}}>Hello Message!</Text>
            </View>
        )
    }
}

