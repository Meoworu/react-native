import {
    View,
    Text,
    Button,
} from 'react-native';
import React, { Component } from 'react';


//component
import LogoTitle from './components/LogoTitle.js';

export default class StoreScreen extends Component {
    static navigationOptions = {
        headerTitle: <LogoTitle/>
    }

    render (){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text> Store Screen </Text>
                <Button
                    title="go to Home"
                    onPress={
                        ()=>{
                            this.props.navigation.navigate('Home');
                        }
                    }
                />
            </View>
        );
    }
}