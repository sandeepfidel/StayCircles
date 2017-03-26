import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  ScrollView,
} from 'react-native';
import _ from 'lodash';
import TabItem from './TabItem';

const tabBarHeight = 42; 
const tabBarBGColor = 'white';
const tabItemBGColor = 'white';

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    borderRadius: 5,
    backgroundColor: tabBarBGColor,
    justifyContent: 'space-around',
    padding: 1,
    height: tabBarHeight,
  },
  scrollContent: {
    alignItems: 'center'
  }
});

export class TabBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      options,
      selectedOption,
      renderSeparator,
      onSelectOption,
    } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          contentContainerStyle={styles.scrollContent}
          showsHorizontalScrollIndicator={false}
        >
          {
            _.map(options, (option, index) => (
              <View key={index} style={[styles.container, styles.innerLayout]}>
                <TabItem
                  title={option}
                  index={index}
                  isSelected={index === selectedOption}
                  onSelect={onSelectOption}
                />
                {renderSeparator && (options.length - 1 !== index) && renderSeparator()}
              </View>
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

TabBar.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  renderSeparator: PropTypes.func,
  onSelectOption: PropTypes.func,
  selectedOption: PropTypes.number,
};

TabBar.defaultProps = {
  options: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  renderSeparator: _.noop,
  onSelectOption: _.noop,
  selectedOption: undefined,
};

export default TabBar;
