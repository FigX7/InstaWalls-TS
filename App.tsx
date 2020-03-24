/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
}
from 'react-native';

import MapScreen from './src/screens/map/MapScreen';


const App: () => React$Node = () => {
  return (
    <View style={{ flex: 1 }}>
    <MapScreen />
  </View>
  );
};


export default App;
