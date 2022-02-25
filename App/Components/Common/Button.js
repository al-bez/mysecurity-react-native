import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import i18n from 'react-native-i18n'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import IconsGlyphs from '../../Fonts/Icons/selection.json'
import styles from './ButtonStyles'
import Text from './Text'
import { SkypeIndicator } from 'react-native-indicators'

const Icons = createIconSetFromIcoMoon(IconsGlyphs)

export default class Button extends Component {
  // renderers
  renderLoading = loading => {
    return loading ? (
      <SkypeIndicator color={'white'} size={25} style={styles.loader} />
    ) : null
  };

  render () {
    const {
      icon,
      children,
      onPress,
      large,
      outline,
      disabled,
      loading,
      loadingText
    } = this.props
    const stylesArray = [styles.button]
    const textStylesArray = [styles.text]
    const iconStylesArray = [styles.icon]
    const loadingTextDisplay = loadingText || i18n.t('loading')
    const buttonTextRender = loading ? loadingTextDisplay : children

    if (large) {
      stylesArray.push(styles.buttonLarge)
      textStylesArray.push(styles.textLarge)
      iconStylesArray.push(styles.iconLarge)
    }

    if (outline) {
      stylesArray.push(styles.buttonOutline)
      textStylesArray.push(styles.textOutline)
    }

    textStylesArray.push(this.props.textStyle)
    stylesArray.push(this.props.style)
    iconStylesArray.push(this.props.iconStyle)

    return (
      <TouchableOpacity
        style={stylesArray}
        onPress={onPress}
        disabled={loading || disabled}>
        {icon && <Icons name={icon} style={iconStylesArray} />}
        <Text style={textStylesArray}>{buttonTextRender}</Text>
        {this.renderLoading(loading)}
      </TouchableOpacity>
    )
  }
}
