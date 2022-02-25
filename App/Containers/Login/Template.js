import React, { Component } from 'react'
import {
  Image,
  Keyboard,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from 'react-native'
import { connect } from 'react-redux'
import * as Animatable from 'react-native-animatable'
import { Images } from '../../Themes'
import styles from './LoginStyles'
import Components from '../../Components'

const { Logo } = Components

class Template extends Component {
  // renderers
  render () {
    const { orientation, children } = this.props
    const isLandscape = orientation === 'landscape'
    const containerStyles = [styles.container]
    const logoStyles = [styles.logo]

    if (isLandscape) {
      // for landscape screen
      containerStyles.push(styles.landscapeContainer)
      logoStyles.push(styles.landscapeLogo)
    }

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          style={containerStyles}
          extraScrollHeight={5}
          bounces={false}
          behavior="padding">
          <Animatable.View
            animation={"fadeInUp"}
            duration={600}
            easing="ease-out-sine"
            style={styles.subContainer}>
            <Logo notag width={100} style={logoStyles} />
            {children}
          </Animatable.View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapStateToProps = state => {
  const {
    app: { orientation }
  } = state
  return { orientation }
}

export default connect(mapStateToProps)(Template)
