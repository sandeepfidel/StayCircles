import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import DateTimePicker from 'react-native-modal-datetime-picker';
import styles from '../Styles';
import TextField from './Common/TextField';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

class ProfileView extends Component {
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

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
        this.setState({image: source}``);
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  }


  render() {
    return (
      <View style={{ alignSelf: 'stretch', flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <View style={[styles.avatarContainerStyle]}>
              <TouchableOpacity
                onPress={this.selectPhotoTapped.bind(this)}
                style={[styles.avatarContainer, {marginVertical: 25}]}
              >
                <Image style={[styles.avatar]} source={this.state.image} resizeMode={'stretch'} />
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
      </View>
    );
  }
}

export default ProfileView;
