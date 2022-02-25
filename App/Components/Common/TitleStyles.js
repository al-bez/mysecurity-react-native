import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

const { PRIMARY } = Colors
const { globalPadding } = Metrics

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center'
  },
  titleContainer: {
    flex: 1,
    paddingLeft: globalPadding,
    borderLeftWidth: 10,
    borderLeftColor: PRIMARY,
    height: '100%',
    justifyContent: 'center'
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 13
  },
  moreContainer: {
    paddingRight: globalPadding,
    height: '100%',
    justifyContent: 'center'
  },
  moreText: {
    fontSize: 9,
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  },
  moreIcon: {
    color: PRIMARY,
    fontSize: 14
  }
})
