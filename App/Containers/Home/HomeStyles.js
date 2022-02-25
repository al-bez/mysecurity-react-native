import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

const { globalPadding } = Metrics

const styles = {
  container: {
    flex: 1
  },
  iconTiles: {
    padding: globalPadding,
    paddingLeft: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  iconTile: {
    marginLeft: globalPadding,
    marginBottom: globalPadding
  }
}
export default StyleSheet.create(styles)
