import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
});

const ContentView = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

ContentView.propTypes = {
  children: PropTypes.node,
};

ContentView.defaultProps = {
  children: undefined,
};

export default ContentView;
