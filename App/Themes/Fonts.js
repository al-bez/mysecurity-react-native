import Fonts from '../Fonts'
import Colors from './Colors'

const BaseText = {
  color: Colors.DARK_TEXT,
  fontFamily: Fonts.PRIMARY
}

const BoldText = {
  ...BaseText,
  fontWeight: 'bold'
}

const size = {
  smallSize: 12,
  regularSize: 14,
  bigSize: 16,
  titleSize: 18,
  largeSize: 20
}

const style = {
  boldText: {
    ...BoldText,
    fontSize: size.bigSize
  },
  smallText: {
    ...BaseText,
    fontSize: size.smallSize
  },
  normalText: {
    ...BaseText,
    fontSize: size.regularSize
  },
  pageTitle: {
    ...BoldText,
    fontSize: size.titleSize
  },
  bigButtonText: {
    ...BoldText,
    fontSize: size.largeSize
  },
  buttonText: {
    ...BaseText,
    fontSize: size.titleSize
  }
}

export default {
  size,
  style
}
