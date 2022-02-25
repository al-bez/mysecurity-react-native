import React, { Component } from 'react'
import { View, TouchableOpacity, ImageBackground } from 'react-native'
import { Text } from '../../Components/Common'
import styles from './ImageTileStyles'

export default class ImageTile extends Component {
  render () {
    const { text, image, style } = this.props
    return (
      <TouchableOpacity style={[styles.container, style]}>
        <ImageBackground source={image} resizeMode='cover' style={styles.image}>
          <Text style={styles.text}>{text}</Text>
          <View style={styles.overlay} />
        </ImageBackground>
      </TouchableOpacity>
    )
  }
}
