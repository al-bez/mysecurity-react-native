import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

const { globalPadding } = Metrics
const WIDTH = 180
const HEIGHT = 130
const styles = {
  container: {
    width: WIDTH,
    height: HEIGHT
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: globalPadding
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.LIGHT_TEXT,
    zIndex: 2,
    textAlign: 'center'
  },
  overlay: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    top: 0,
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: Colors.DARK_OVERLAY
  }
}

export default StyleSheet.create(styles)
