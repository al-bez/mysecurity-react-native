import React, { Component } from 'react'
import { View, StatusBar, Dimensions } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import Orientation from 'react-native-orientation-locker'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'
import { Metrics } from '../Themes'
import styles from './Styles/RootContainerStyles'
import Creators from '../Redux/AppRedux'

class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
    // lock portrait
    // Orientation.lockToPortrait()
  }

  componentDidUpdate () {}

  handleLayoutChange = () => {
    const { setOrientation, orientation } = this.props
    const { width, height } = Dimensions.get('window')
    const newOrientation = width > height ? 'landscape' : 'portrait'
    // update app's orientation
    if (orientation !== newOrientation) setOrientation(newOrientation)
  }

  render () {
    const { statusBarTheme } = this.props
    return (
      <View style={styles.applicationView} onLayout={this.handleLayoutChange}>
        <StatusBar
          barStyle={Metrics.IS_IOS ? statusBarTheme : 'light-content'}
          style={styles.statusBar}
        />
        <ReduxNavigation />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup()),
  ...bindActionCreators(
    {
      ...Creators
    },
    dispatch
  )
})

const mapStateToProps = state => {
  const {
    app: { orientation, statusBarTheme }
  } = state
  return {
    orientation,
    statusBarTheme
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer)
