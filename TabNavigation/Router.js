import React, { Component } from 'react';
import { createBottomTabNavigator , createStackNavigator } from 'react-navigation';


//component
import A from './HomeScreen.js';
import B from './SettingScreen.js';
import C from './AboutScreen.js';
import D from './StoreScreen.js';
import E from './headTab/Message.js';
import Icon from './components/Icon.js';

// const Home = createStackNavigator({ A });
// const Setting = createStackNavigator({ B });
// const AboutScreen = createStackNavigator({ C });
// const StoreScreen = createStackNavigator({ D });

const Home = A;
const Setting = B;
const AboutScreen = C;
const StoreScreen = D;

const BottonTab = createBottomTabNavigator(
    {
        Home: Home,
        Setting: Setting,
        About:AboutScreen,
        Store: StoreScreen,
    },
    {
        navigationOptions: ({navigation}) => {
            return {
                tabBarIcon:(focused, tintColor)=>{
                    let {routeName} = navigation.state;
                    let img;
                    if( routeName == 'Home'){
                        if(focused.focused){
                            img = require('../img/c1.png');
                        }else{
                            img = require('../img/c.png');
                        }
                    }else if(routeName == 'Setting'){
                        if(focused.focused){
                            img = require('../img/a1.png');
                        }else{
                            img = require('../img/a.png');
                        }
                    }
                    else if(routeName == 'About'){
                        if(focused.focused){
                            img = require('../img/b1.png');
                        }else{
                            img = require('../img/b.png');
                        }
                    }else if(routeName == 'Store'){
                        if(focused.focused){
                            img = require('../img/d1.png');
                        }else{
                            img = require('../img/d.png');
                        }
                    }
                    return <Icon img={img}/>
                }
            }
        },
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            //activeBackgroundColor: '#456789',//活动选项卡背景颜色
            labelStyle: {
                fontSize: 14,
            },
        },
    }
)

const AllRoute = createStackNavigator(
    { 
        BottonTab:BottonTab,
        Msg : E
    },
    {
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
    }
);
E.navigationOptions = {
    title:'Hello'
}
BottonTab.navigationOptions = ({navigation}) => {
    let { routeName } = navigation.state.routes[navigation.state.index];
    let headerTitle = routeName;
    return {
        headerTitle,
    };
}
export default AllRoute;