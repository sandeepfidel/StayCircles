import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const EmptyView = props => (
  <View style={styles.container}>
    <Text>Work In Progress</Text>
  </View>
);

EmptyView.propTypes = {

};

EmptyView.defaultProps = {

};

export default EmptyView