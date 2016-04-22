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

export default class Beers extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
    }
  }

  componentDidMount() {
    axios.get('http://obwapp.athensworks.com/beers')
    .then((resp) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(resp.data.beers),
      })
    })
  }

  render() {
    return (
      <Page
        title="Beers"
        onMenuPress={this.props.onMenuPress}
      >
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(beer) => <List primaryText={beer.name} />}
            renderSeparator={(s, r) => <Divider key={`${s}-${r}`} />}
          />
      </Page>
    )
  }
}
