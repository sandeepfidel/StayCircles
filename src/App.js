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

import AccountSettings from './Component/AccountSettings';


export default class StayCircles extends Component {

  render() {
    return (
      <AccountSettings/>
    );
  }
}
``