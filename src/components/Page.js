import React, {
  Component,
  StyleSheet,
  View,
} from 'react-native'

import {
  Toolbar,
} from 'react-native-material-design'

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 56,
  },
})

export default class Page extends Component {

  render() {
    const {
      title,
      onMenuPress,
    } = this.props
    return (
      <View style={styles.page}>
        <Toolbar icon="menu" title={title} onIconPress={onMenuPress} />
        {this.props.children}
      </View>
    )
  }
}
