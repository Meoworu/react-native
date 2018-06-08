import React from 'react';
import { View, Text, Button } from 'react-native';



export default class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Home',
            headerRight:(
                <Button
                    title="store"
                    onPress={
                        ()=>{
                            navigation.navigate('Store');
                        }
                    }
                    color="#fff"
                />
            ),
            
            
        }
        
    }

    render() {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
            title="Go to About"
            onPress={() => {
                this.props.navigation.navigate('About',{ id:829475, name:'About'});
            }}
        />
        </View>
        );
    }
}
