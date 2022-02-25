import React, { Component } from 'react'
import { Text as RNText } from 'react-native'
import styles from './TextStyles'

export default class Text extends Component {
  render () {
    const {
      style,
      children,
      numberOfLines,
      small,
      bold,
      big,
      title,
      button,
      underlined
    } = this.props
    const compStyles = [styles.text]

    compStyles.push(style)

    if (bold) compStyles.push(styles.boldText)
    if (small) compStyles.push(styles.smallText)
    if (big) compStyles.push(styles.titleText)
    if (title) compStyles.push(styles.bigText)
    if (button) compStyles.push(styles.buttonText)
    if (underlined) compStyles.push(styles.underlinedText)

    return (
      <RNText style={compStyles} numberOfLines={numberOfLines}>
        {children}
      </RNText>
    )
  }
}
