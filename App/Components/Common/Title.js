import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import * as Animatable from 'react-native-animatable'
import i18n from 'react-native-i18n'
import IconGlyphs from '../../Fonts/Icons/selection.json'
import styles from './TitleStyles'
import { Colors } from '../../Themes'
import { Text } from '../Common'

const Icon = createIconSetFromIcoMoon(IconGlyphs)

export default class Title extends Component {
  renderMoreContent (icon) {
    return icon ? (
      <Icon name={icon} style={styles.moreIcon} />
    ) : (
      <Text style={styles.moreText}>+{i18n.t('more')}</Text>
    )
  }
  render () {
    const { text, onPress, icon } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{text}</Text>
        </View>
        <TouchableOpacity style={styles.moreContainer} onPress={onPress}>
          {this.renderMoreContent(icon)}
        </TouchableOpacity>
      </View>
    )
  }
}
