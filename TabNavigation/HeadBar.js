import { createStackNavigator } from 'react-navigation';


//component 
import Message from './headTab/Message.js';
import StoreScreen from './StoreScreen.js';
const RootStack = createStackNavigator(
    {
        Store:StoreScreen,
        Msg:Message,
    },
    {
        initialRouteName:'Msg',
    }
)

export default RootStack;