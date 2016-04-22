import _ from 'lodash'
import React, {
  Component,
  ListView,
  ScrollView,
  View,
  Text,
} from 'react-native'

import Page from '../Page'

export default class Map extends Component {
  render() {
    return (
      <Page
        title="Map"
        onMenuPress={this.props.onMenuPress}
      />
    )
  }
}
