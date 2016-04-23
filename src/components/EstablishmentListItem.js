import React from 'react-native'
import _ from 'lodash'
import List from '../vendor/List'
import { Icon } from 'react-native-material-design'

const EstablishmentListItem = ({establishment}) => (
  <List
    leftIcon={<Icon name="store-mall-directory" />}
    primaryText={establishment.name}
    secondaryText={_.first(establishment.address.split(','))}
  />
)

export default EstablishmentListItem
