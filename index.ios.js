/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Map from './src/Map'


export default class MapApp extends Component {
  render() {
    return (
      <Map />
    );
  }
}

AppRegistry.registerComponent('MapApp', () => MapApp);
