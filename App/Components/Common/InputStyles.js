import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../Themes/'

const {
  style: { input }
} = Fonts
const { brandColor1 } = Colors
const { inputHeight, inputPadding } = Metrics

export default StyleSheet.create({
  inputStyle: {
    ...input,
    width: '100%',
    height: inputHeight,
    borderWidth: 0,
    paddingBottom: 0,
    paddingLeft: inputPadding,
    paddingRight: inputPadding,
    paddingTop: 0,
    borderColor: 'transparent',
    borderBottomColor: brandColor1,
    color: brandColor1
  }
})
