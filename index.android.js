import React, {
  AppRegistry,
  Component,
  StyleSheet,
  DrawerLayoutAndroid,
  Navigator,

  Text,
} from 'react-native'

import {
  Toolbar,
} from 'react-native-material-design'

import Page from './src/components/Page'

import Establishments from './src/components/pages/Establishments'

const NavigationDrawer = () => <Text>Hello, World</Text>

class OBWappAndroid extends Component {
  constructor(props, context) {
    super(props, context)

    this.renderScene = this.renderScene.bind(this)
    this.handlePressMenu = this.handlePressMenu.bind(this)
  }

  handlePressMenu() {
    this.refs.drawer.openDrawer()
  }

  renderScene(route, navigator) {
    switch(route.id) {
    case 'establishments':
      return <Establishments navigator={navigator} onMenuPress={this.handlePressMenu} />
    case 'beers':
      return <Toolbar title="Beers" />
    case 'map':
      return <Toolbar title="Map" />
    case 'about':
      return <Toolbar title="About" />
    }
  }

  render() {
    return (
      <DrawerLayoutAndroid
        ref="drawer"
        renderNavigationView={() => <NavigationDrawer navigator={this.refs.navigator} />}
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
