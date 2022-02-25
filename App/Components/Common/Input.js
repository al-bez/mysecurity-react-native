import React, { Component } from 'react'
import { TextInput } from 'react-native'
import styles from './InputStyles'

export default class Input extends Component {
  render () {
    return (
      <TextInput
        underlineColorAndroid='transparent'
        placeholder={'Enter Text'}
        {...this.props}
        style={[styles.inputStyle, this.props.style]}
      />
    )
  }
}
