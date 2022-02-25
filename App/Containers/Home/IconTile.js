import React, { Component } from 'react'
import { View, TouchableOpacity, ImageBackground } from 'react-native'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import { Text } from '../../Components/Common'
import styles from './IconTileStyles'
import IconGlyphs from '../../Fonts/Icons/selection.json'

const Icon = createIconSetFromIcoMoon(IconGlyphs)

export default class IconTile extends Component {
  render () {
    const { text, icon, color, style } = this.props
    const compStyles = [styles.container, style]

    if (color) compStyles.push({ backgroundColor: color })

    return (
      <TouchableOpacity style={compStyles}>
        <Icon name={icon} style={styles.icon} />
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    )
  }
}
