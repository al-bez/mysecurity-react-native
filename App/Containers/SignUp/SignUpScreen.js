import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, TouchableOpacity, TextInput } from 'react-native'
import { bindActionCreators } from 'redux'
import i18n from 'react-native-i18n'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import { Text, Input, Button } from '../../Components/Common'
import Template from './Template'
import styles from './SignUpStyles'
import SessionActions from '../../Redux/SessionRedux'
import ErrorsHelper from '../../Helpers/Errors'
import { Colors } from "../../Themes";
import {
  REQUEST_ID,
  PIN_CODE,
  MOBILE,
  PATIENT_ID
} from '../../Services/ApiConstants'
import IconsGlyphs from '../../Fonts/Icons/selection.json'

const Icons = createIconSetFromIcoMoon(IconsGlyphs)
const DEF_PATIENT_ID = i18n.t('patientID')
const DEF_NAME = i18n.t('name')
const DEF_EMAIL = i18n.t('email')
const DEF_MOBILE = i18n.t('mobile')

class SignUp extends Component {
  state = {
    name: DEF_NAME,
    email: DEF_EMAIL,
    mobile: DEF_MOBILE,
    patientID: DEF_PATIENT_ID,
    errors: {}
  };

  componentDidMount () {
    this.props.setLoginCredentials({ failed: false })
  }

  componentWillReceiveProps (nextProps) {
    const {
      session: { credentials = {} },
      navigation: { isFocused }
    } = nextProps

  }


  render () {
    const {
      // name,
      // email,
      patientID,
      mobile,
      errors
    } = this.state
    const {
      session: {
        credentials: { failed }
      },
      loading
    } = this.props
    const errorText = failed
      ? i18n.t('messages.loginFailed')
      : ErrorsHelper.parseFirstError(errors)

    return (
      <Template>
        <Text style={styles.tagLine}>Sign Up</Text>

        <TextInput
          style={styles.textInputStyle}
          placeholder="Name"
          placeholderTextColor={Colors.PRIMARY}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />

        <TextInput
          style={styles.textInputStyle}
          placeholder="Email"
          placeholderTextColor={Colors.PRIMARY}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />

        <TextInput
          style={styles.textInputStyle}
          placeholder="Phone Number"
          placeholderTextColor={Colors.PRIMARY}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />

        <TextInput
          style={styles.textInputStyle}
          placeholder="Password"
          placeholderTextColor={Colors.PRIMARY}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />

        <TextInput
          style={styles.textInputStyle}
          placeholder="Brokers Code"
          placeholderTextColor={Colors.PRIMARY}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />

        <TouchableOpacity style={{height:40}}>
          <Text bold>Terms and Conditions</Text>
        </TouchableOpacity>
        <Button
          style={styles.button}
          onPress={() => this.props.navigation.navigate("LoginScreen")}
          large>
          {i18n.t("logIn")}
        </Button>

      </Template>
    );
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      ...SessionActions
    },
    dispatch
  )
})

const mapStateToProps = state => {
  const {
    app: { loading },
    session
  } = state
  return { session, loading }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)
