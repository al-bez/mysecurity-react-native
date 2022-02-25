import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native'
import { bindActionCreators } from 'redux'
import i18n from 'react-native-i18n'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import { Text, Input, Button } from '../../Components/Common'
import styles from './ProfileScreenStyles'
import SessionActions from '../../Redux/SessionRedux'
import { Colors } from "../../Themes";
// import TabNavigation from '../../Navigation/TabNavigation';
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

class ProfileScreen extends Component {
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

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={styles.subContainer}>
          <View
            style={styles.ProfileImageContainer}>
            <View
              style={styles.ProfileImage}>
              <Text bold>400%</Text>
            </View>
          </View>
        </View>
        <View style={styles.LoyalityHeaderStyle}>
          <Text style={styles.LoyalityText}>LOYALITY STATUS</Text>
          <Text style={styles.LoyalityText}>550$| BLUE</Text>
        </View>
        <View  style={styles.ProfileHeader}>
          <TouchableOpacity style={{ height: 60 }}>
            <Text style={{ fontWeight: "bold" }}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ height: 60 }}>
            <Text style={{ fontWeight: "bold" }}>Edit</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={{ flex: 1 }}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TextInput
              style={styles.textInputStyle}
              placeholder="Phone Number"
              placeholderTextColor={Colors.PRIMARY}
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
            />

            <TextInput
              style={styles.textInputStyle}
              placeholder="Credit Card Number"
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
              placeholder="Address"
              placeholderTextColor={Colors.PRIMARY}
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
            />

            <Button
              style={styles.button}
              onPress={() => this.props.navigation.navigate("LoginScreen")}
              large>
              Sign Out
            </Button>
          </View>
        </ScrollView>
        {/* <TabNavigation /> */}
      </SafeAreaView>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
