import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native'

//component
import Icon from './components/Icon.js';
export default class StoreScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            tabBarIcon:(focused, tintColor)=>{
                let img;
                if(focused.focused){
                    img = require('../img/d1.png');
                }else{
                    img = require('../img/d.png');
                }
                return <Icon img={img}/>
            }
        }
    }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{fontSize:24}}>Store!</Text>
          <Button title="go to message"
                onPress={
                    ()=>{
                        this.props.navigation.navigate('Msg');
                    }
                } />
        </View>
      );
    }
}