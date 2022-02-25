import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes'

const { globalPadding } = Metrics
const WIDTH = '100%'
const HEIGHT = 160
const styles = {
  tiles: {
    height: 160,
    width: WIDTH
  },
  tilesScroller: {
    width: WIDTH
  },
  tilesContainer: {
    padding: globalPadding,
    flexDirection: 'row'
  },
  tile: {
    marginRight: globalPadding
  },
  lastTile: {
    marginRight: 0
  }
}

export default StyleSheet.create(styles)
