import React from 'react';
import { Text, View, Button, Image } from 'react-native';


//component
import Icon from './components/Icon.js';

export default class HomeScreen extends React.Component {
    
    render() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{fontSize:24}}>Home!</Text>
            <Button title="go to Store"
                onPress={
                    ()=>{
                        this.props.navigation.navigate('Store');
                    }
                }
            />
            <Button title="go to Message"
                onPress={
                    ()=>{
                        this.props.navigation.navigate('Msg');
                    }
                }
            />
        </View>
        );
    }
}

