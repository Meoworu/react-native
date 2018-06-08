import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native'

//component
import Icon from './components/Icon.js';

export default class SettingsScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            tabBarIcon:(focused, tintColor)=>{
                let img;
                if(focused.focused){
                    img = require('../img/a1.png');
                }else{
                    img = require('../img/a.png');
                }
                return <Icon img={img}/>
            }
        }
    }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#56789a' }}>
          <Text style={{fontSize:24}}>Settings!</Text>
        </View>
      );
    }
}