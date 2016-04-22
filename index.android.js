import React, {
  AppRegistry,
  Component,
} from 'react-native'
import {
  Provider,
} from 'react-redux'
import store from './src/store'
import App from './src/components/App'

class OBWappAndroid extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('OBWappAndroid', () => OBWappAndroid)
