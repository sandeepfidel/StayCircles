import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import DateTimePicker from 'react-native-modal-datetime-picker';
import styles from '../Styles';
import TextField from './Common/TextField';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ActionSheet from '@remobile/react-native-action-sheet';

class ProfileView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editable: true,
      showActionSheet: false,
      isDateTimePickerVisible: false,
      image: undefined,
    };
  }


  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    this.refs.email.focus();
    this._hideDateTimePicker();
  };

  toggleActionSheet = () => this.setState({ showActionSheet: !this.state.showActionSheet});

  pickWithCamera = () => {
    ImagePicker.openCamera({
      cropping: true,
      width: 500,
      height: 500,
    }).then(image => {
      this.setState({
        image: { uri: image.path,},
        showActionSheet: false,
      });
    }).catch(e => alert(e));
  }

  pickWithGallary = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: true,
      includeBase64: true
    }).then(image => {
      this.setState({
        image: { uri: `data:${image.mime};base64,`+ image.data,},
        showActionSheet: false,
      });
    }).catch(e => alert(e));
  }

  render() {
    return (
      <View style={{ alignSelf: 'stretch', flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <View style={[styles.avatarContainerStyle]}>
              <TouchableOpacity
                onPress={this.toggleActionSheet.bind(this)}
                style={[styles.avatarContainer, {marginVertical: 25}]}
              >
                <Image
                  style={[styles.avatar]}
                  source={this.state.image || require('../images/user.png')}
                  resizeMode={'stretch'}
                />
              </TouchableOpacity>
            </View>
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
          </ScrollView>
        </View>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          maximumDate={new Date}
        />
        <ActionSheet
          visible={this.state.showActionSheet}
          onCancel={() => this.toggleActionSheet()} >
          <ActionSheet.Button onPress={this.pickWithCamera}>
            Capture from camera
          </ActionSheet.Button>
          <ActionSheet.Button onPress={this.pickWithGallary}>
            Pick from gallary
          </ActionSheet.Button>
        </ActionSheet>
      </View>
    );
  }
}

export default ProfileView;
