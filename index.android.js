import React, {
  AppRegistry,
  Component,
} from 'react-native'
import {
  Provider,
} from 'react-redux'
import store from './src/store'
import { fetchBeers } from './src/actions/beers'
import { fetchEstablishments } from './src/actions/establishments'
import App from './src/components/App'

class OBWappAndroid extends Component {
  componentDidMount() {
    // Fetch new data on load of App
    store.dispatch(fetchEstablishments())
    store.dispatch(fetchBeers())
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('OBWappAndroid', () => OBWappAndroid)
