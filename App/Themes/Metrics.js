import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')
const IS_IOS = Platform.OS === 'ios'

// Used via Metrics.baseMargin
const metrics = {
  IS_IOS,
  navBarHeight: IS_IOS ? 64 : 54,
  statusBarHeight: IS_IOS ? 20 : 0,
  headerHeight: 80,
  subHeadingHeight: 35,
  globalPadding: 15,
  inputPadding: 12,
  inputHeight: 36,
  inputIconSize: 18,
  inputIconPadding: 10,
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  buttonHeight: 40,
  buttonTextSize: 14,
  buttonLargeTextSize: 18,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  buttonRadius: 6,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 253
  }
}

export default metrics
