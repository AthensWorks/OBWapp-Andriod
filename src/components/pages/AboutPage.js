import _ from 'lodash'
import React, {
  Component,
  ListView,
  ScrollView,
  View,
  Text,
} from 'react-native'

import Page from '../Page'

export default class About extends Component {
  render() {
    return (
      <Page
        title="About"
        onMenuPress={this.props.onMenuPress}
      />
    )
  }
}
