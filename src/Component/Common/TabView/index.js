import React, { PropTypes, Component } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import _ from 'lodash';
import Tabbar from './TabBar';
import TabContentView from './TabContentView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    width: Dimensions.get('screen').width,
    justifyContent: 'center',
  },
});

const arrayWithKey = (array, key) => (
  _.map(array, item => item[key])
);

export default class TabView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 0,
    };

    this.renderComponent = this.renderComponent.bind(this);
  }

  renderComponent() {
    return _.map(this.props.tabs, (tab, index) =>
      <ScrollView
        key={index}
        contentContainerStyle={styles.tabContainer}
        scrollEnabled={this.props.scrollable}
      >
        {tab.component}
      </ScrollView>,
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Tabbar
          selectedOption={this.state.currentTab}
          options={arrayWithKey(this.props.tabs, 'title')}
          onSelectOption={currentTab => this.setState({ currentTab })}
        />
          <TabContentView>
            {this.props.tabs[this.state.currentTab].component}
          </TabContentView>
      </View>
    );
  }
}

TabView.propTypes = {
  scrollable: PropTypes.bool,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      component: PropTypes.object,
    }),
  ),
};

TabView.defaultProps = {
  scrollable: true,
  tabs: [
    {
      title: 'tab 1',
      component: <Text> item 1 </Text>,
    },
    {
      title: 'tab 2',
      component: <Text> item 2 </Text>,
    },
    {
      title: 'tab 3',
      component: <Text> item 3 </Text>,
    },
  ],
};
