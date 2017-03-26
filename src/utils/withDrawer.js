import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import DrawerScreen from '../Component/ControlPanel';

export class DrawerWrapper extends Component {
  constructor() {
    super();
    this.state = {
      showDrawer: false,
      hasDrawer: true,
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  getChildContext() {
    return {
      toggleDrawer: this.toggleDrawer,
    };
  }

  toggleDrawer() {
    this.setState({ showDrawer: !this.state.showDrawer });
  }

  render() {
    return (
      <Drawer
        tapToClose
        content={<DrawerScreen />}
        open={this.state.showDrawer}
        openDrawerOffset={100}
        panOpenMask={0.05}
        onOpen={() => this.setState({ showDrawer: true })}
        onClose={() => this.setState({ showDrawer: false })}
      >
        {this.props.children}
      </Drawer>
    );
  }
}

DrawerWrapper.propTypes = {
  children: React.PropTypes.node,
};

DrawerWrapper.defaultProps = {
  children: null,
};

DrawerWrapper.childContextTypes = {
  toggleDrawer: React.PropTypes.func,
};

export default params => props => <DrawerWrapper>
  {React.createElement(params, props)}
</DrawerWrapper>;
