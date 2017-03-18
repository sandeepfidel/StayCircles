/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';

import Profile from './Component/Profile';


export default class StayCircles extends Component {

  render() {
    return (
      <Profile/>
    );
  }
}
