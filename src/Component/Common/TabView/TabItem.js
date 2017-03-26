import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import _ from 'lodash';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  textWrapper: {
    marginBottom: 3,
  },
  selected: {
    backgroundColor: '#53A0FF',
  }
});

const TabItem = ({ title, index, onSelect, isSelected }) => (
  <TouchableOpacity
    activeOpacity={1}
    style={[styles.container, isSelected && styles.selected]}
    onPress={() => onSelect(index)}
  >
    <View style={styles.textWrapper}>
      <Text style={styles.title}> {title} </Text>
    </View>
  </TouchableOpacity>
);

TabItem.propTypes = {
  title: PropTypes.string,
  index: PropTypes.number,
  onSelect: PropTypes.func,
};

TabItem.defaultProps = {
  title: 'Tab title',
  index: undefined,
  onSelect: _.noop,
};

export default TabItem;
