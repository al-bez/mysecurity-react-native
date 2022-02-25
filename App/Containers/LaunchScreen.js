import React, { Component } from 'react'
import { ImageBackground, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AppActions from '../Redux/AppRedux'
import { Images } from '../Themes'
import styles from './Styles/LaunchScreenStyles'

class LaunchScreen extends Component {
  componentDidMount () {
    const {
      navigation: { isFocused }
    } = this.props
    if (isFocused()) {
      this.props.getToken()
      this.initTimeout = setTimeout(this.navigateToNext, 1e3)
    }
  }

  componentDidUpdate () {
    const {
      navigation: { isFocused }
    } = this.props
    if (isFocused()) this.navigateToNext()
  }

  componentWillBlur () {
    this.clearTimeouts()
  }

  // methods
  navigateToNext = () => {
    const { loggedIn } = this.props
    this.props.navigation[loggedIn ? 'navigate' : 'replace'](
      loggedIn ? 'DashboardScreen' : 'LoginScreen',
      { fromLaunch: true }
    )
    this.clearTimeouts()
  };

  clearTimeouts () {
    clearInterval(this.initTimeout)
  }

  // renderers
  render () {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={Images.BACKGROUND_WITH_LOGO}
          style={styles.backgroundImage}
          resizeMode='cover'
        />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      ...AppActions
    },
    dispatch
  )
})

const mapStateToProps = state => {
  const {
    session: { loggedIn }
  } = state
  return { loggedIn }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LaunchScreen)
