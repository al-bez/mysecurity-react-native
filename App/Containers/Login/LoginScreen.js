import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, TouchableOpacity, TextInput } from 'react-native'
import { bindActionCreators } from 'redux'
import i18n from 'react-native-i18n'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import { Text, Input, Button } from '../../Components/Common'
import Template from './Template'
import styles from './LoginStyles'
import validatejs from '../../Lib/validate.min.js'
import SessionActions from '../../Redux/SessionRedux'
import ErrorsHelper from '../../Helpers/Errors'
import NumbersHelper from '../../Helpers/Numbers'
import {
  REQUEST_ID,
  PIN_CODE,
  MOBILE,
  PATIENT_ID
} from '../../Services/ApiConstants'
import IconsGlyphs from '../../Fonts/Icons/selection.json'
import { Colors } from '../../Themes'

const Icons = createIconSetFromIcoMoon(IconsGlyphs)
const DEF_PATIENT_ID = i18n.t('patientID')
const DEF_NAME = i18n.t('name')
const DEF_EMAIL = i18n.t('email')
const DEF_MOBILE = i18n.t('mobile')

class LoginScreen extends Component {
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
    const {
      session: { credentials: oldCredentials }
    } = this.props
    if (isFocused) {
      const RequestId = credentials[REQUEST_ID]
      const PinCode = credentials[PIN_CODE]
      const oldPinCode = oldCredentials[PIN_CODE]
      // navigate to confirmation screen
      if (!oldPinCode && RequestId && PinCode) {
        this.props.navigation.navigate('ConfirmationScreen')
      }
    }
  }

  // handlers
  handleNextPress = () => {
    this.submit()
  };

  handleNameFocus = () => {
    const { name } = this.state
    const state = { errors: {} }
    if (name === DEF_NAME) state.name = ''
    this.setState(state)
  };

  handleNameBlur = () => {
    const { name } = this.state
    if (name.trim() === '') this.setState({ name: DEF_NAME })
  };

  handleNameChange = name => {
    this.setState({ name })
  };

  handleMobileFocus = () => {
    const { mobile } = this.state
    const state = { errors: {} }
    if (mobile === DEF_MOBILE) state.mobile = ''
    this.setState(state)
  };

  handleMobileBlur = () => {
    const { mobile } = this.state
    if (mobile.trim() === '') this.setState({ mobile: DEF_MOBILE })
  };

  handleMobileChange = mobile => {
    this.setState({ mobile: NumbersHelper.parseMobileNumber(mobile, false) })
  };

  handleMailFocus = () => {
    const { email } = this.state
    const state = { errors: {} }
    if (email === DEF_EMAIL) state.email = ''
    this.setState(state)
  };

  handleMailBlur = () => {
    const { email } = this.state
    if (email.trim() === '') this.setState({ email: DEF_EMAIL })
  };

  handleMailChange = email => {
    this.setState({ email })
  };

  handlePatientIDFocus = () => {
    const { patientID } = this.state
    if (patientID === DEF_PATIENT_ID) this.setState({ patientID: '' })
  };

  handlePatientIDBlur = () => {
    const { patientID } = this.state
    if (patientID.trim() === '') this.setState({ patientID: DEF_PATIENT_ID })
  };

  handlePatientIDChange = patientID => {
    this.setState({ patientID })
  };

  // methods
  clearError = () => {
    this.setState({
      errors: {}
    })
  };

  validate () {
    const { mobile, patientID } = this.state
    const validation = {
      // name: {
      //   presence: {
      //     message: i18n.t('messages.cannotBeBlank')
      //   },
      //   format: value =>
      //     value === DEF_NAME ? i18n.t('messages.cannotBeBlank') : false,
      //   length: {
      //     maximum: 35,
      //     tooLong: i18n.t('messages.isTooLong')
      //   }
      // },
      patientID: {
        presence: {
          message: i18n.t('messages.cannotBeBlank')
        },
        format: value =>
          value === DEF_PATIENT_ID ? i18n.t('messages.cannotBeBlank') : false,
        numericality: {
          onlyInteger: true,
          message: i18n.t('messages.isNotANumber')
        },
        length: {
          maximum: 10,
          tooLong: i18n.t('messages.isTooLong')
        }
      },
      mobile: {
        presence: {
          message: i18n.t('messages.cannotBeBlank')
        },
        format: value =>
          NumbersHelper.parseMobileNumber(value).length < 7
            ? i18n.t('messages.notValid')
            : false,
        numericality: {
          onlyInteger: true,
          message: i18n.t('messages.isNotANumber')
        },
        length: {
          maximum: 12,
          minimum: 7,
          tooLong: i18n.t('messages.isTooLong')
        }
      }
      // email: {
      //   presence: {
      //     message: i18n.t('messages.cannotBeBlank')
      //   },
      //   format: value =>
      //     value === DEF_EMAIL ? i18n.t('messages.cannotBeBlank') : false,
      //   email: {
      //     message: i18n.t('messages.notValid')
      //   },
      //   length: {
      //     maximum: 45,
      //     tooLong: i18n.t('messages.emailTooLong')
      //   }
      // }
    }
    const validated = validatejs({ patientID, mobile }, validation)
    this.setState({
      errors: validated || {}
    })
    return !validated
  }

  submit () {
    const isValid = this.validate()
    const { name, mobile, patientID } = this.state
    if (isValid) {
      this.props.updateUser({ name, mobile, patientID })
      const request = {}
      request[MOBILE] = mobile
      request[PATIENT_ID] = patientID
      this.props.login(request)
    }
  }

  // renderers
  renderError (errorText) {
    return errorText ? <Text style={styles.error}>{errorText}</Text> : null
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
        <Text style={styles.tagLine}>Log in</Text>
        {/* <Button
          style={styles.button}
          onPress={() => this.props.navigation.navigate("HomeScreen")}
          large>
          {i18n.t("logIn")}
        </Button> */}

        <TextInput
          style={styles.textInputStyle}
          placeholder="Email"
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

        <Button style={styles.button} large onPress={()=>this.props.navigation.navigate('HomeScreen')}>
          {/* {i18n.t("signUp")}
           */}
          Submit
        </Button>

        <TouchableOpacity>
          <Text bold>
            {/* {i18n.t("continueAsGuest")} */}
            Forgot your Password?
          </Text>
        </TouchableOpacity>

        <View style={styles.subSectionColumn}>
          <Text small>- {i18n.t("or")} -</Text>
        </View>
     
        <TouchableOpacity
          style={styles.facebookButton}>
          <View>
            <FontAwesome
              name="facebook-f"
              size={23}
              color={"#FFFFFF"}
            />
          </View>
          <View>
            <Text style={styles.facebookButtonText}>
              {/* {i18n.t("continueAsGuest")} */}Connect with Facebook
            </Text>
          </View>
        </TouchableOpacity>
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
)(LoginScreen)
