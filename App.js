import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './TabNavigation/Router.js';

export default class ReactNavigationDemo extends Component {
  render() {
    return (
     <App  />
    );
  }
}

AppRegistry.registerComponent('ReactNavigationDemo', () => ReactNavigationDemo);