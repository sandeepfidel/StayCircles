import React from 'react';
import {
  Button,
  View,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    alignSelf: 'center',
    borderRadius: 4,
    borderWidth: 3,
    marginTop: 5,
    width: 60,
  },
});

const SignUpButton = props => (
  <View style={[styles.containerStyle, props.containerStyles]}>
    <Button
      {...props}
    />
  </View>
);

SignUpButton.propTypes = {
  containerStyles: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.number]),
};

SignUpButton.defaultProps = {
  containerStyles: {},
};

export default SignUpButton;
