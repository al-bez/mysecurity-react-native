import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

const { PRIMARY } = Colors
const {
  style: {
    boldText,
    smallText,
    normalText,
    pageTitle,
    bigButtonText,
    buttonText
  }
} = Fonts

export default StyleSheet.create({
  boldText,
  smallText,
  text: {
    ...normalText
  },
  titleText: {
    ...pageTitle
  },
  bigText: {
    ...bigButtonText
  },
  buttonText,
  underlinedText: {
    textDecorationLine: 'underline'
    // borderBottomColor: Colors.DARK_TEXT,
    // borderBottomWidth: 1
  }
})
