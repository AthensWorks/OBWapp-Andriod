import _ from 'lodash'
import React, {
  Component,
  ListView,
  ScrollView,
  View,
  Text,
} from 'react-native'
import { connect } from 'react-redux'
import List from 'react-native-material-design/lib/List'
import Divider from 'react-native-material-design/lib/Divider'

import { fetchEstablishments } from '../../actions/establishments'
import Page from '../Page'

const mapStateToProps = ({establishments}) => ({
  establishments: _.values(establishments.data),
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
      <Page
        title="Establishments"
        onMenuPress={this.props.onMenuPress}
      >
          <ListView
            enableEmptySections
            dataSource={this.state.dataSource}
            renderRow={(establishment) => <List primaryText={establishment.name} />}
            renderSeparator={(s, r) => <Divider key={`${s}-${r}`} />}
          />
      </Page>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EstablishmentsPage)
