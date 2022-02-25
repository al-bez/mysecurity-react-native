import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

const { BACKGROUND, PRIMARY, BORDER } = Colors
const { headerHeight, statusBarHeight, globalPadding } = Metrics

const headerHidden = {
  height: 0,
  paddingTop: 0
}
const headerVisible = {
  height: headerHeight + statusBarHeight,
  paddingTop: globalPadding + statusBarHeight
}

export default StyleSheet.create({
  container: {
    ...headerVisible,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: BACKGROUND,
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflow: 'hidden',
    borderBottomWidth: 1.5,
    borderBottomColor: BORDER
  },
  containerLandscape: {
    marginTop: -10,
    height: (headerHeight + statusBarHeight) * 0.9,
    paddingBottom: 10,
    paddingTop: 0
  },
  containerOut: {
    ...headerHidden
  },
  containerIn: {
    ...headerVisible
  },
  leftColumn: {
    flex: 1,
    height: '100%',
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  centerColumn: {
    flex: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%'
  },
  rightColumn: {
    flex: 1,
    height: '100%',
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  menuButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100%',
    paddingLeft: globalPadding
  },
  userButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '100%',
    paddingRight: globalPadding
  },
  menuIcon: {
    fontSize: 16,
    color: PRIMARY
  },
  userIcon: {
    fontSize: 23,
    color: PRIMARY
  }
})
