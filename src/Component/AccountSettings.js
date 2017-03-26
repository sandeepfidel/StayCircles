/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';

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
  ScrollView,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
import DateTimePicker from 'react-native-modal-datetime-picker';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import withDrawer from '../utils/withDrawer';

import styles from '../Styles';
import TextField from './Common/TextField';
import ControlPanel from './ControlPanel';
import SignUpButton from './Common/SignUpButton';
import ModalDropdown from './Common/ModalDropdown';
import TabView from './Common/TabView';
import ProfileView from './ProfileView';
import WIP from './Common/EmptyView';

const {width} = Dimensions.get('window');
const tabViewData = [
  {
    title: 'Profile',
    component: <ProfileView />,
  },
  {
    title: 'Payment Methods',
    component: <WIP />,
  },
  {
    title: 'Payout Methods',
    component: <WIP />,
  },
  {
    title: 'Transaction',
    component: <WIP />,
  },
  {
    title: 'Security',
    component: <WIP />,
  },
  {
    title: 'Notifications',
    component: <WIP />,
  },
  {
    title: 'Messages',
    component: <WIP />,
  },
];

class AccountSettings extends Component {
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
      <View style={{flex: 1}}>
        <View style={styles.navigation}>
          <TouchableOpacity onPress={() => this.context.toggleDrawer()} style={[styles.swiperMenu, {position: 'absolute', left: 10, top: 10}]}>
            <Image style={styles.swiperMenuImage} source={require('../images/menu.png')} />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <TabView tabs={tabViewData}/>
        </View>

        <View style={styles.footer}>
          {/*Swipe will be implemented to make access drawer with ease*/}
          <View style={{ flex: 1 }} />
          <TouchableOpacity onPress={() => this.openDrawer()} style={styles.bug}>
            <Image style={styles.swiperMenuImage} source={require('../images/bug.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

AccountSettings.contextTypes = {
  toggleDrawer: PropTypes.func,
}

export default withDrawer(AccountSettings);