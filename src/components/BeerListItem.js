import React, {
  Component,
} from 'react-native'
import _ from 'lodash'
import List from 'react-native-material-design/lib/List'
import {
  Icon,
} from 'react-native-material-design'

const getABVText = ({abv}) => abv ? `ABV ${abv}%` : null
const getIBUText = ({ibu}) => ibu ? `${ibu} IBU` : null

const getDetailLines = (beer) => {
  const items = _.compact([getABVText(beer), getIBUText(beer)])
  if (items.length > 0) {
    return [
      { text: items.join(' / '), style: { fontStyle: 'italic' } },
    ]
  }
  return null
}

const BeerListItem = ({
  beer,
}) => (
  <List
    leftIcon={<Icon name="check-box-outline-blank"/>}
    rightIcon={<Icon name="keyboard-arrow-right" />}
    primaryText={beer.name}
    secondaryText={beer.brewery}
    secondaryTextMoreLine={getDetailLines(beer)}
  />
)

export default BeerListItem
