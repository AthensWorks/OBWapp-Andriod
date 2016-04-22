import React from 'react-native'
import _ from 'lodash'
import List from 'react-native-material-design/lib/List'

const EstablishmentListItem = ({establishment}) => (
  <List
    primaryText={establishment.name}
    secondaryText={_.first(establishment.address.split(','))}
    onPress={() => console.log('press...')}
  />
)

export default EstablishmentListItem
