import React, { Component, PropTypes } from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native'

export default class ControlPanel extends Component {
  static propTypes = {
    closeDrawer: PropTypes.func.isRequired
  };

  render() {
    let {closeDrawer} = this.props
    return (
      <ScrollView style={styles.container}>
        <View style={styles.menuLogo}>
          <Image
            source={require('../images/logo.png')}
            style={styles.logoImage}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../images/female_filled.png')}
            style={styles.buttonImageStyle}
          />
          <Text
            style={styles.buttonTextStyle}
          >
            Maps
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../images/female_filled.png')}
            style={styles.buttonImageStyle}
          />
          <Text
            style={styles.buttonTextStyle}
          >
            Host
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../images/female_filled.png')}
            style={styles.buttonImageStyle}
          />
          <Text
            style={styles.buttonTextStyle}
          >
            Places/Rooms
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../images/female_filled.png')}
            style={styles.buttonImageStyle}
          />
          <Text
            style={styles.buttonTextStyle}
          >
            StayPals
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../images/female_filled.png')}
            style={styles.buttonImageStyle}
          />
          <Text
            style={styles.buttonTextStyle}
          >
            Travel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../images/female_filled.png')}
            style={styles.buttonImageStyle}
          />
          <Text
            style={styles.buttonTextStyle}
          >
            Message
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={closeDrawer}>
          <Text
            style={[styles.buttonTextStyle, {textAlign: "center", paddingLeft: 0}]}
          >
            Close Drawer
          </Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#222223',
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    flexDirection: "row"
  },
  buttonImageStyle: {
    flex: 1,
    height: 30
  },
  buttonTextStyle: {
    flex: 5,
    paddingLeft: 20
  }
})