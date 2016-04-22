import _ from 'lodash'
import React, {
  Component,
  ListView,
  RefreshControl,
  ScrollView,
  View,
  Text,
} from 'react-native'
import { connect } from 'react-redux'
import List from 'react-native-material-design/lib/List'
import Divider from 'react-native-material-design/lib/Divider'

import { fetchEstablishments } from '../../actions/establishments'

const mapStateToProps = ({establishments}) => ({
  establishments: _.values(establishments.data),
  isLoading: establishments.isLoading,
})

const mapDispatchToProps = {
  fetchEstablishments,
}

class EstablishmentsPage extends Component {
  constructor(props, context) {
    super(props, context)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds.cloneWithRows(props.establishments)
    }
  }

  componentDidMount() {
    this.props.fetchEstablishments()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.establishments)
    })
  }

  render() {
    return (
      <ListView
        enableEmptySections
        refreshControl={
          <RefreshControl
            refreshing={this.props.isLoading}
            onRefresh={this.props.fetchEstablishments}
          />
        }
        dataSource={this.state.dataSource}
        renderRow={(establishment) => <List primaryText={establishment.name} />}
        renderSeparator={(s, r) => <Divider key={`${s}-${r}`} />}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EstablishmentsPage)
