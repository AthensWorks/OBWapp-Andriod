import _ from 'lodash'
import React, {
  Component,
  ListView,
  ScrollView,
  RefreshControl,
  View,
  Text,
} from 'react-native'
import { connect } from 'react-redux'

import List from 'react-native-material-design/lib/List'
import Divider from 'react-native-material-design/lib/Divider'

import { fetchBeers } from '../../actions/beers'

const mapStateToProps = ({beers}) => ({
  beers: _.values(beers.data),
  isLoading: beers.isLoading,
})

const mapDispatchToProps = {
  fetchBeers,
}

class BeersPage extends Component {
  constructor(props, context) {
    super(props, context)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds.cloneWithRows(props.beers),
    }
  }

  componentDidMount() {
    this.props.fetchBeers()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.beers)
    })
  }

  render() {
    return (
      <ListView
        enableEmptySections
        refreshControl={
          <RefreshControl
            refreshing={this.props.isLoading}
            onRefresh={this.props.fetchBeers}
          />
          }
          dataSource={this.state.dataSource}
          renderRow={(beer) => <List primaryText={beer.name} />}
          renderSeparator={(s, r) => <Divider key={`${s}-${r}`} />}
        />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeersPage)
