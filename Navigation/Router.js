import React ,{ Component } from 'react';
import { createStackNavigator } from 'react-navigation';

// components 
import HomeScreen from './HomePage.js';
import AboutScreen from './AboutPage.js';
import StoreScreen from './StorePage.js';

const RootStack = createStackNavigator(
    {
        Home : {screen : HomeScreen},
        About: AboutScreen,
        Store: StoreScreen,
    },
    {
        initialRouteName: 'Home',
        navigationOptions : {
            headerStyle: {
                backgroundColor: '#00a4db',
            },
            headerTintColor: '#fff',//返回的角角颜色
            headerTitleStyle: {
                fontSize:16,
                color:'#fff',
            },
            headerBackTitleStyle:{
                color:'#fff'
            },
            mode: 'modal',
            headerMode: 'none',
        }
    },
    
    
)

export default class App extends Component {
    render() {
        return <RootStack />;
    }
}