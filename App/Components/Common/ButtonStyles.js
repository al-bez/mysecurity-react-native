import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../Themes/'

const { PRIMARY, LIGHT_TEXT, LIGHT_BUTTON, DARK_TEXT } = Colors
const {
  globalPadding,
  buttonHeight,
  buttonRadius,
  inputIconSize,
  buttonLargeTextSize,
  buttonTextSize
} = Metrics
const { style } = Fonts

export default StyleSheet.create({
  button: {
    flexDirection: 'row',
    width: '100%',
    height: buttonHeight,
    backgroundColor: PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: buttonRadius
  },
  buttonLarge: {
    height: buttonHeight * 1.3,
    borderRadius: buttonRadius * 1.3
  },
  buttonOutline: {
    backgroundColor: LIGHT_BUTTON,
    borderColor: PRIMARY,
    borderWidth: 1
  },
  text: {
    ...style.buttonText,
    color: LIGHT_TEXT,
    fontSize: buttonTextSize,
    fontWeight: 'bold'
  },
  textLarge: {
    fontSize: buttonLargeTextSize
  },
  textOutline: {
    color: DARK_TEXT
  },
  icon: {
    width: 'auto',
    height: 20,
    marginRight: 10,
    fontSize: inputIconSize,
    alignSelf: 'center'
  },
  iconLarge: {
    height: 30,
    fontSize: inputIconSize * 1.5
  },
  loader: {
    position: 'absolute',
    right: globalPadding / 2,
    zIndex: 1
  }
})
