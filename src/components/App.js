import React, {
  Component,
  StyleSheet,
  DrawerLayoutAndroid,
  Navigator,
  View,
} from 'react-native'

import {
  Drawer,
  Toolbar,
} from 'react-native-material-design'

import Routes from '../routes'

export default class App extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = { route: Routes['establishments-list'] }

    this.renderScene = this.renderScene.bind(this)
    this.handlePressMenu = this.handlePressMenu.bind(this)
    this.renderNavigationView = this.renderNavigationView.bind(this)
    this.navigateTo = this.navigateTo.bind(this)
  }

  handlePressMenu() {
    this.refs.drawer.openDrawer()
  }

  navigateTo(id) {
    return () => {
      this.setState({ route: Routes[id] })
      this.refs.navigator.replace(Routes[id])
      this.refs.drawer.closeDrawer()
    }
  }

  renderNavigationView() {
    return (
      <Drawer theme="light">
        <Drawer.Section
          items={[
            {
              icon: 'location-on',
              value: 'Establishments',
              onPress: this.navigateTo('establishments-list'),
              active: this.state.route.id === 'establishments-list',
            },
            {
              icon: 'local-bar',
              value: 'Beers',
              onPress: this.navigateTo('beers-list'),
              active: this.state.route.id === 'beers-list',
            },
            {
              icon: 'map',
              value: 'Map',
              onPress: this.navigateTo('map'),
              active: this.state.route.id === 'map',
            },
            {
              icon: 'help',
              value: 'About',
              onPress: this.navigateTo('about'),
              active: this.state.route.id === 'about',
            },
          ]}
        />
      </Drawer>
    )
  }

  renderScene(route, navigator) {
    return React.createElement(route.component, { navigator })
  }

  render() {
    const { route } = this.state
    return (
      <DrawerLayoutAndroid
        ref="drawer"
        renderNavigationView={this.renderNavigationView}
      >
        <Navigator
          navigationBar={
            <Toolbar icon="menu" title={route.title} onIconPress={this.handlePressMenu} />
          }
          style={{ paddingTop: 56 }}
          ref="navigator"
          renderScene={this.renderScene}
          initialRoute={Routes['establishments-list']}
        />
      </DrawerLayoutAndroid>
    )
  }
}
