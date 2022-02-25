import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

const { globalPadding, buttonRadius, screenWidth } = Metrics
const WIDTH = (screenWidth - globalPadding * 3) / 2
const HEIGHT = 130
const styles = {
  container: {
    width: WIDTH,
    height: HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: buttonRadius * 1.2,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 7
  },
  icon: {
    fontSize: 52,
    color: Colors.LIGHT_TEXT
  },
  text: {
    color: Colors.LIGHT_TEXT,
    fontSize: 18,
    textAlign: 'center',
    marginTop: globalPadding * 0.5
  }
}

export default StyleSheet.create(styles)
