import React, { Component } from 'react'
import { Image } from 'react-native'
import { Images } from '../Themes'

const logoWidth = 253
const logoHeight = 197
const logoSoloHeight = 142

export default class Logo extends Component {
  render () {
    const { width, style, notag } = this.props
    const widthNumber = width || logoWidth
    const styles = [
      {
        width: widthNumber,
        height:
          (widthNumber / logoWidth) * (notag ? logoSoloHeight : logoHeight)
      }
    ]

    if (style) styles.push(style)

    return (
      <Image
        source={notag ? Images.LOGO : Images.LOGO_WITH_TAG}
        style={styles}
        resizeMode='contain'
      />
    )
  }
}
