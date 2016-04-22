import _ from 'lodash'
import React, {
  Component,
  ListView,
  ScrollView,
  View,
  Text,
} from 'react-native'
import axios from 'axios'

import List from 'react-native-material-design/lib/List'
import Divider from 'react-native-material-design/lib/Divider'

import Page from '../Page'

export default class Establishments extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
    }
  }

  componentDidMount() {
    axios.get('http://obwapp.athensworks.com/establishments')
    .then((resp) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(resp.data.establishments),
      })
    })
  }

  render() {
    return (
      <Page
        title="Establishments"
        onMenuPress={this.props.onMenuPress}
      >
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(establishment) => <List primaryText={establishment.name} />}
            renderSeparator={(s, r) => <Divider key={`${s}-${r}`} />}
          />
      </Page>
    )
  }
}
