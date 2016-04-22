import React, {
  AppRegistry,
  Component,
  StyleSheet,
  DrawerLayoutAndroid,
  Navigator,

  Text,
} from 'react-native'

import {
  Drawer,
} from 'react-native-material-design'

import EstablishmentsPage from './src/components/pages/EstablishmentsPage'
import BeersPage from './src/components/pages/BeersPage'
import MapPage from './src/components/pages/MapPage'
import AboutPage from './src/components/pages/AboutPage'

class OBWappAndroid extends Component {
  constructor(props, context) {
    super(props, context)

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
      this.refs.navigator.replace({
        'establishments': { id: 'establishments' },
        'beers': { id: 'beers' },
        'map': { id: 'map' },
        'about': { id: 'about' },
      }[id])
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
              onPress: this.navigateTo('establishments'),
            },
            {
              icon: 'local-bar',
              value: 'Beers',
              onPress: this.navigateTo('beers'),
            },
            {
              icon: 'map',
              value: 'Map',
              onPress: this.navigateTo('map'),
            },
            {
              icon: 'help',
              value: 'About',
              onPress: this.navigateTo('about'),
            },
          ]}
        />
      </Drawer>
    )
  }

  renderScene(route, navigator) {
    switch(route.id) {
    case 'establishments':
      return <EstablishmentsPage navigator={navigator} onMenuPress={this.handlePressMenu} />
    case 'beers':
      return <BeersPage navigator={navigator} onMenuPress={this.handlePressMenu} />
    case 'map':
      return <MapPage navigator={navigator} onMenuPress={this.handlePressMenu} />
    case 'about':
      return <AboutPage navigator={navigator} onMenuPress={this.handlePressMenu} />
    }
  }

  render() {
    return (
      <DrawerLayoutAndroid
        ref="drawer"
        renderNavigationView={this.renderNavigationView}
      >
        <Navigator
          ref="navigator"
          renderScene={this.renderScene}
          initialRoute={{id: 'establishments' }}
        />
      </DrawerLayoutAndroid>
    )
  }
}

AppRegistry.registerComponent('OBWappAndroid', () => OBWappAndroid)
