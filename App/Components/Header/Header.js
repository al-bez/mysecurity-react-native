import React, { Component } from 'react'
import { View, Image, TouchableOpacity, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import IconGlyphs from '../../Fonts/Icons/selection.json'
import styles from './HeaderStyles'
import * as Animatable from 'react-native-animatable'
import Logo from '../Logo'
import { Colors } from '../../Themes'

const Icon = createIconSetFromIcoMoon(IconGlyphs)

// custom animations
Animatable.initializeRegistryWithDefinitions({
  headerCropIn: {
    from: styles.containerOut,
    to: styles.containerIn
  },
  headerCropOut: {
    from: styles.containerIn,
    to: styles.containerOut
  }
})

class Header extends Component {
  state = {
    willUnmount: false
  };

  componentWillUnmount () {
    this.setState({ willUnmount: true })
    this.forceUpdate()
  }

  // renderers
  render () {
    const { width } = Dimensions.get('window')
    const {
      // scene: {
      // route: { routeName }
      // },
      orientation
    } = this.props
    const { willUnmount } = this.state
    const showElements = true
    const containerStyles = [styles.container]

    // set screen width
    containerStyles.push({ width })
    // for landscape
    if (orientation === 'landscape') {
      containerStyles.push(styles.containerLandscape)
    }

    return (
      <Animatable.View
        animation={willUnmount ? 'headerCropOut' : 'headerCropIn'}
        duration={600}
        easing='ease-out-expo'
        style={containerStyles}>
        <Animatable.View
          animation={showElements ? 'fadeInLeft' : 'fadeOutLeft'}
          duration={600}
          easing='ease-out-sine'
          style={styles.leftColumn}>
          <TouchableOpacity style={styles.menuButton}>
            <Icon name='menu-alt' style={styles.menuIcon} />
          </TouchableOpacity>
        </Animatable.View>
        <View style={styles.centerColumn}>
          <Logo notag width={92} />
        </View>
        <Animatable.View
          animation={showElements ? 'fadeInRight' : 'fadeOutRight'}
          duration={600}
          easing='ease-out-sine'
          style={styles.rightColumn}>
          <TouchableOpacity style={styles.userButton}>
            <Icon name='user-circle' style={styles.userIcon} />
          </TouchableOpacity>
        </Animatable.View>
      </Animatable.View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapStateToProps = state => {
  return {
    orientation: state.app.orientation,
    navRoutes: state.nav.routes
  }
}

export default connect(mapStateToProps)(Header)
