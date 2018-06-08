# react-native
#### 1，组件之间传值 Props

```
import React, { Component } from 'react' ;
import { View , Image, Text, StyleSheet } from 'react-native' ;



class TabItem extends Component {
    render (){
        return (
            <Text style={{fontSize:30}}>{this.props.name}</Text>
        )
    }
}
export default class Tab extends Component {
    render (){
        return(
            <View style={{backgroundColor:'#999', marginTop:100}}>
                <TabItem name={'张三'}></TabItem>
                <TabItem name={'李四'}></TabItem>
                <TabItem name={'王五'}></TabItem>
            </View>
        );
    }
}
```

方法：子组件利用this.props[attr]访问父组件通过标属性传来的值
#### 2，State 状态管理机制

```
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };//初始化state

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState(state => {
        return { showText: !state.showText };
      });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='hello gril' />
      </View>
    );
  }
}

```
#### 3，Style 样式

```
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

```
注意：此处引入StyleSheet，native的样式都是由StyleSheet.create()方法创建的，样式属性名使用驼峰式。

```

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
```
你还可以传入一个数组——在数组中位置居后的样式对象比居前的优先级更高，这样你可以间接实现样式的继承。
#### 4，Fetch 获取数据以及 FaltList长列表使用

```
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
    constructor(props){
        super(props);
        this.state = {
            arr:[{name:'章三'}]
        }
    }
    componentDidMount() {
        fetch('http://180.76.100.92:3000/tabClass',{
            method:'get',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(res => {
            return res.text();
        }).then( data => {
            this.setState({arr:JSON.parse(data)});
            console.log(this.state);
        }).catch(err => {
            console.log(err);
        })
    }
    render() {
        return (
        <View style={styles.container}>
            <FlatList
            data={this.state.arr}
            renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
            />
        </View>
        );
    }


}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
```
注：同学们可以直接运行代码请求数据使用此IP，服务器长期有效

# react-navigation 

#### App.js -------- react-native程序入口

```
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './App/Router.js';

export default class ReactNavigationDemo extends Component {
  render() {
    return (
     <App  />
    );
  }
}

AppRegistry.registerComponent('ReactNavigationDemo', () => ReactNavigationDemo);
```

#### Router.js -------- 路由初始化以及配置

```
import React ,{ Component } from 'react';
import { createStackNavigator } from 'react-navigation';

// components 
import HomeScreen from './HomePage.js';
import AboutScreen from './AboutPage.js';

const RootStack = createStackNavigator(
    {
        Home : HomeScreen,
        About: AboutScreen,
    },
    {
        initialRouteName: 'Home',
    }
    
)

export default class App extends Component {
    render() {
        return <RootStack />;
    }
}
```
#### HomePage.js ---------- 路由首页

```
import React from 'react';
import { View, Text, Button } from 'react-native';



export default class HomeScreen extends React.Component {
    render() {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
            title="Go to About"
            onPress={() => {console.log(this); this.props.navigation.navigate('About')}}
        />
        </View>
        );
    }
}

```
#### AboutPage.js ---------- 路由第二页

```
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class AboutScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>About Screen</Text>
          <Button
            title="Go to Self"
            onPress={() => {this.props.navigation.push('About')}}
            />
            <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
            />
            <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
            />
        </View>
      );
    }
}
```

#### 路由主要的跳转方法
1. 当路由有变化时候发生跳转动作
```
this.props.navigation.navigate(RouterName)
```
2. 当发生此事件时候路由及️跳转动作

```
this.props.navigation.push(RouterName)
```

3. 回到放路由堆栈中的上一层

```
this.props.navigation.goBack()
```

4. 回到路由堆栈中的首层

```
this.props.navigation.popToTop()
```

#### 路由传参数 push & navigate
1. 

```
let param = {
    name:'章三',
    age:'18'
}
this.props.navigation.navigate(RouterName, param);
```
路由参数获取

```
this.props.navigation.getParam('name') // 章三
```

2. 

```
let param = {
    name:'章三',
    age:'18'
}
this.props.navigation.push(RouterName, param);
```
路由参数获取

```
this.props.navigation.getParam('name') // 章三
```

#### 导航样式设置
1. 在路由组件中定义静态的 navigationOptions 对象来控制路由样式及文案
```
static navigationOptions = {
    title: 'Home', //导航title文字
    headerStyle: {
        backgroundColor: '#00a4db',//导航栏背景颜色
    },
    headerTitleStyle: {
        fontSize:16,//导航title字体大小
        color:'#fff',//导航title字体颜色

    }
};
```
2. 如果你的每个路由页面导航栏的样式都一样，你也可以将导航的样式配置写在Router.js的路由配置中

```
{
    Home : HomeScreen,
    About: AboutScreen,
},
{
    initialRouteName: 'Home',//默认路由
    navigationOptions : {
        headerStyle: {
            backgroundColor: '#00a4db',//导航栏背景颜色
        },
        headerTintColor: '#333',
        headerTitleStyle: {
            fontSize:16,//导航title字体大小
            color:'#fff',//导航title字体颜色
        }
    }
},
```
#### 自定义导航头

1. headerTitle这个属性可以接受一个自定义组件作为导航头，之后Title组件将展示在导航头部，如果可以的话可以完全覆盖导航
```
static navigationOptions = {
    headerTitle: <Title/>
}
```
#### 头部导航与底部导航混合使用

1. 这可能是最为常见的需求了

```
import { createBottomTabNavigator , createStackNavigator } from 'react-navigation';
```
分别在你的项目中从 ```react-navigation```中倒入```createBottonTabNavigator```与```createStackNavigator```

2. 通常你的项目中有‘首页’，‘视频’，‘商城’，‘我的’，这四项。通常把他们放到底部的tabBar中这时候就该使用```createBottonTabNavigator```

3. 通过对应路径倒入对应组件然后通过```createBottomTabNavigator```函数返回一个路由组件，在这里我起名字叫```BottonTab```。
```
const BottonTab = createBottomTabNavigator(
    {
        Home: Home,
        Setting: Setting,
        About:AboutScreen,
        Store: StoreScreen,
    },
    {
        navigationOptions: ({navigation}) => {
       
```
4. 这时候引入其他非这四大主页的其他路由组件

```
import Message from './components/Message.js';//信息路由组件

import LogIn from './components/LogIn.js';//登陆路由组件
```
5. 然后将这两个组件与之前调用函数生成的```BottonTab```底部路由导航组件一同以参数形式传入```createStackNavigator```函数中返回一个```headerRouter```的头部路由组件，将其注册到App.js中完成路由注册。

