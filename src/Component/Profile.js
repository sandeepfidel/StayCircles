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

import Drawer from 'react-native-drawer';
import ImagePicker from 'react-native-image-picker';
import DateTimePicker from 'react-native-modal-datetime-picker';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import styles from '../Styles';
import TextField from './Common/TextField';
import ControlPanel from './ControlPanel';
import SignUpButton from './Common/SignUpButton';
import ModalDropdown from './Common/ModalDropdown';

const {width} = Dimensions.get('window');
const data = ['Profile', 'Payment Methods', 'Payout Methods', 'Transaction', 'Security', 'Notifications', 'Messages'];


export default class Profile extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      editable: true,
      drawerOpen: false,
      drawerDisabled: false,
      isDateTimePickerVisible: false,
      image: require('../images/user.png'),
    };
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    this.refs.email.focus();
    this._hideDateTimePicker();
  };

  selectPhotoTapped() {
      const options = {
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
          skipBackup: true
        }
      };

      // ImagePicker.showImagePicker(options, (response) => {
      //   console.log('Response = ', response);

      //   if (response.didCancel) {
      //     console.log('User cancelled photo picker');
      //   }
      //   else if (response.error) {
      //     console.log('ImagePicker Error: ', response.error);
      //   }
      //   else if (response.customButton) {
      //     console.log('User tapped custom button: ', response.customButton);
      //   }
      //   else {
      //     let source = { uri: response.uri };
      //     this.setState({image: source});
      //     // You can also display the image using data:
      //     // let source = { uri: 'data:image/jpeg;base64,' + response.data };
      //   }
      // });
    }

  closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };

  renderRow = (rowData) => {
    return (
        <View style={styles.renderRowContainer}>
          <Text style={styles.renderRowText}>
            {rowData}
          </Text>
        </View>
    );
  }

  render() {
    return (
      <Drawer
        type='static'
        ref={(ref) => this._drawer = ref}
        content={
          <ControlPanel
            closeDrawer={this.closeDrawer}
          />
        }
        openDrawerOffset={100}
        tweenHandler={Drawer.tweenPresets.parallax}
        onOpen={() => {
          this.setState({drawerOpen: true})
        }}
        onClose={() => {
          this.setState({drawerOpen: false})
        }}
        captureGestures={true}
      >
        <View style={styles.navigation}>
          <TouchableOpacity onPress={() => this.openDrawer()} style={[styles.swiperMenu, {position: 'absolute', left: 10, top: 10}]}>
            <Image style={styles.swiperMenuImage} source={require('../images/menu.png')} />
          </TouchableOpacity>
        </View>
        <View
          style={styles.containerStyles}  
        >
          <ScrollView
            horizontal={true}
            style={{ maxHeight: 35 }}
            showsHorizontalScrollIndicator={false}
          >
            {data.map((d, index) => {
              return(
                <View
                  style={styles.menuBar}
                  key={d}
                >
                  {index === 0 ? <Text style={[styles.menuBarText, { textDecorationLine: 'underline' }]}>{d}</Text> : <Text style={styles.menuBarText}>{d}</Text>}
                </View>
              );
            })}
         </ScrollView>
          <KeyboardAvoidingView behavior='position' style={{ flex: 1, marginBottom: 40 }}>
          {/*Image Picker:- Needs to be implemented */}
            <View style={styles.avatarContainerStyle}>
              <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20, marginTop: 25}]}>
                  <Image style={styles.avatar} source={this.state.image} />
                </View>
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollViewStyle}>
              <View style={{ flex: 1 }}>
                <TextField
                  style={styles.textFieldStyle}
                  label={'Name'}
                  iconClass={FontAwesomeIcon}
                  iconName={'user'}
                  iconColor={'steelblue'}
                  onChangeText={(text) => {
                  }}
                  onSubmitEditing={() => this.refs.number.focus()}
                  returnKeyType='next'
                  editable={this.state.editable}
                />
                <TextField
                  ref='email'
                  style={styles.textFieldStyle}
                  label={'Email'}
                  iconClass={FontAwesomeIcon}
                  iconName={'envelope'}
                  iconColor={'steelblue'}
                  keyboardType='email-address'
                  returnKeyType='next'
                  onChangeText={(text) => {
                  }}
                  editable={this.state.editable}
                />
                <TextField
                  ref='number'
                  style={styles.textFieldStyle}
                  label={'Phone Number'}
                  iconClass={FontAwesomeIcon}
                  iconName={'phone'}
                  iconColor={'steelblue'}
                  keyboardType='numeric'
                  returnKeyType='next'
                  onSubmitEditing={() => this.refs.dob.focus()}
                  onChangeText={(text) => {
                  }}
                  editable={this.state.editable}
                />
                <TextField
                  ref='dob'
                  style={styles.textFieldStyle}
                  label={'DOB'}
                  iconClass={FontAwesomeIcon}
                  iconName={'calendar'}
                  iconColor={'steelblue'}
                  onFocus={this._showDateTimePicker}
                  editable={this.state.editable}
                />
              </View>
            </ScrollView>
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDateTimePicker}
              maximumDate={new Date}
            />
          </KeyboardAvoidingView>
        </View>
        <View style={styles.footer}>
          {/*Swipe will be implemented to make access drawer with ease*/}
          <View style={{ flex: 1 }} />
          <View style={styles.profile}>
            <View style={styles.profileBarContainer}>
              {/* A dynamic status bar needs to be implemented*/}
              <View style={styles.profileBar}>
                <Text style={styles.profileBarText}>Profile</Text>
                <Text style={styles.profileBarText}>100%</Text>
                <Text style={styles.profileBarText}>Completed</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => this.openDrawer()} style={styles.bug}>
            <Image style={styles.swiperMenuImage} source={require('../images/bug.png')} />
          </TouchableOpacity>
        </View>
      </Drawer>
    );
  }
}
