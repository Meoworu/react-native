import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native'

//component
import Icon from './components/Icon.js';
export default class AboutScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            tabBarIcon:(focused, tintColor)=>{
                let img;
                if(focused.focused){
                    img = require('../img/b1.png');
                }else{
                    img = require('../img/b.png');
                }
                return <Icon img={img}/>
            }
        }
    }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{fontSize:24}}>About!</Text>
        </View>
      );
    }
}