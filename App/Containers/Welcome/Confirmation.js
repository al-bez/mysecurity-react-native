import React, { Component } from 'react'
import { connect } from 'react-redux'
// import moment from 'moment'
import { Text } from 'react-native'
import { bindActionCreators } from 'redux'
import i18n from 'react-native-i18n'
// import DatePicker from 'react-native-datepicker'
import { Input, Button } from '../../Components/Common'
import Template from './Template'
import styles from './WelcomeStyles'
import validatejs from '../../Lib/validate.min.js'
import SessionActions from '../../Redux/SessionRedux'
import ErrorsHelper from '../../Helpers/Errors'
import { REQUEST_ID, PIN_CODE, PATIENT_ID } from '../../Services/ApiConstants'

const DEF_PIN_CODE = i18n.t('pinCode')

class Confirmation extends Component {
  state = {
    pinCode: DEF_PIN_CODE,
    errors: {}
  };

  componentDidMount () {
    this.props.setLoginConfirmation({ failed: false })
  }

  componentDidUpdate () {
    const {
      navigation: { isFocused },
      loggedIn
    } = this.props

    if (isFocused && loggedIn) {
      // navigate to dashboard screen
      this.props.navigation.replace('DashboardScreen')
    }
  }

  // handlers
  handleSubmitPress = () => {
    this.submit()
  };

  // handlePatientIDFocus = () => {
  //   const { patientID } = this.state
  //   if (patientID === DEF_PATIENT_ID) this.setState({ patientID: '' })
  // }
  //
  // handlePatientIDBlur = () => {
  //   const { patientID } = this.state
  //   if (patientID.trim() === '') this.setState({ patientID: DEF_PATIENT_ID })
  // }
  //
  // handlePatientIDChange = patientID => {
  //   this.setState({ patientID })
  // }

  // handleDOBFocus = () => {
  //   const { dob } = this.state
  //   if (dob === DEF_DOB) this.setState({ dob: '' })
  // }
  //
  // handleDOBBlur = () => {
  //   const { dob } = this.state
  //   if (dob.trim() === '') this.setState({ dob: DEF_DOB })
  // }
  //
  // handleDOBChange = dob => {
  //   this.setState({ dob })
  // }

  handlePinCodeFocus = () => {
    const { pinCode } = this.state
    if (pinCode === DEF_PIN_CODE) this.setState({ pinCode: '' })
  };

  handlePinCodeBlur = () => {
    const { pinCode } = this.state
    if (pinCode.trim() === '') this.setState({ pinCode: DEF_PIN_CODE })
  };

  handlePinCodeChange = pinCode => {
    this.setState({ pinCode })
  };

  handleGoBack = () => this.props.navigation.pop();

  // methods
  clearError = () => {
    this.setState({
      errors: {}
    })
  };

  validate () {
    const { pinCode } = this.state
    const { credentials } = this.props
    const validPinCode = credentials[PIN_CODE]
    const validation = {
      // patientID: {
      //   presence: {
      //     message: i18n.t('messages.cannotBeBlank')
      //   },
      //   format: value =>
      //     value === DEF_PATIENT_ID ? i18n.t('messages.cannotBeBlank') : false,
      //   numericality: {
      //     onlyInteger: true,
      //     message: i18n.t('messages.isNotANumber')
      //   },
      //   length: {
      //     maximum: 10,
      //     tooLong: i18n.t('messages.isTooLong')
      //   }
      // },
      pinCode: {
        presence: {
          message: i18n.t('messages.cannotBeBlank')
        },
        format: value =>
          value === DEF_PIN_CODE
            ? i18n.t('messages.cannotBeBlank')
            : parseInt(pinCode) !== parseInt(validPinCode)
              ? i18n.t('messages.incorrectPinCode')
              : false,
        numericality: {
          onlyInteger: true,
          message: i18n.t('messages.isNotANumber')
        },
        length: {
          maximum: validPinCode.length,
          tooLong: i18n.t('messages.isTooLong')
        }
      }
      // dob: {
      //   presence: {
      //     message: i18n.t('messages.cannotBeBlank')
      //   },
      //   datetime: {
      //     latest: moment().format(DATE_FORMAT),
      //     dateOnly: true,
      //     message: i18n.t('messages.isNotAValidDate')
      //   }
      // }
    }
    // validatejs.extend(validatejs.validators.datetime, {
    //   parse: (value, options) => +moment.utc(value),
    //   format: (value, options) => moment.utc(value).format(DATE_FORMAT)
    // })

    const validated = validatejs(
      {
        // patientID,
        pinCode
        // dob
      },
      validation
    )

    this.setState({
      errors: validated || {}
    })

    return !validated
  }

  submit () {
    const isValid = this.validate()
    const { pinCode } = this.state
    const { user, credentials } = this.props
    if (isValid) {
      const request = {}
      this.props.updateUser({ ...user, pinCode })
      request[REQUEST_ID] = credentials[REQUEST_ID]
      request[PIN_CODE] = pinCode
      request[PATIENT_ID] = user.patientID
      this.props.confirmLogin(request)
    }
  }

  // renderers
  renderError (errorText) {
    return errorText ? <Text style={styles.error}>{errorText}</Text> : null
  }

  render () {
    const { pinCode, errors } = this.state
    const {
      loading,
      confirmation: { failed, error }
    } = this.props
    // const minDate = moment().format(DATE_FORMAT)
    const errorText = failed
      ? error || i18n.t('messages.loginFailed')
      : ErrorsHelper.parseFirstError(errors)
    return (
      <Template>
        <Input
          style={styles.input}
          icon='mobile'
          placeholder={DEF_PIN_CODE}
          value={pinCode}
          onFocus={this.handlePinCodeFocus}
          onBlur={this.handlePinCodeBlur}
          onChangeText={this.handlePinCodeChange}
          keyboardType={'number-pad'}
        />
        {this.renderError(errorText)}
        <Button
          loading={loading}
          onPress={this.handleSubmitPress}
          style={styles.button}>
          {i18n.t('submit')}
        </Button>
        <Button onPress={this.handleGoBack} style={styles.backButton}>
          {i18n.t('goBack')}
        </Button>
      </Template>
    )
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
    session: { loggedIn, user, credentials, confirmation }
  } = state
  return { loading, user, loggedIn, credentials, confirmation }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Confirmation)
