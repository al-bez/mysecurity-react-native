import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import ImageTile from './ImageTile'
import styles from './ImageTilesStyles'

export default class ImageTiles extends Component {
  renderTile = (tile, i) => {
    const {
      tilesData: { length }
    } = this.props
    const isLast = i === length - 1
    return (
      <ImageTile
        key={i}
        text={tile.text}
        image={tile.image}
        style={[styles.tile, isLast ? styles.lastTile : {}]}
      />
    )
  };
  render () {
    const { tilesData, style } = this.props
    return (
      <View style={[styles.tiles, style]}>
        <ScrollView
          horizontal
          style={styles.tilesScroller}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tilesContainer}>
          {tilesData.map(this.renderTile)}
        </ScrollView>
      </View>
    )
  }
}
