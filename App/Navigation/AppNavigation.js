import React from 'react'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import HomeScreen from '../Containers/Home'
import LoginScreen from "../Containers/Login";
import Header from '../Components/Header'
import Welcome from "../Containers/Welcome";
import SignUp from '../Containers/SignUp';
import ProfileScreen from "../Containers/ProfileScreen";
import styles from './NavigationStyles';
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// const { LoginScreen } = Login
const { WelcomeScreen } = Welcome;
const noSwiper = { gesturesEnabled: false }
const noHeader = { header: null, ...noSwiper }

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen, navigationOptions: noHeader },
    LoginScreen: { screen: LoginScreen, navigationOptions: noHeader },
    HomeScreen: { screen: HomeScreen },
    ProfileScreen: { screen: ProfileScreen },
    WelcomeScreen: { screen: WelcomeScreen, navigationOptions: noHeader },
    SignUp: { screen: SignUp, navigationOptions: noHeader }
  },
  {
    // Default config for all screens
    headerMode: "float",
    initialRouteName: "ProfileScreen",
    appStyle: {
      portraitOnlyMode: true
    },
    defaultNavigationOptions: {
      header: props => <Header {...props} />,
      headerStyle: styles.header
    }
  }
);

// const Call = createStackNavigator(
//   {
//     HomeScreen: { screen: HomeScreen },
//     ProfileScreen: { screen: ProfileScreen },
//   },
//   {
//     // Default config for all screens
//     headerMode: "float",
//     initialRouteName: "ProfileScreen",
//     appStyle: {
//       portraitOnlyMode: true
//     },
//     defaultNavigationOptions: {
//       header: props => <Header {...props} />,
//       headerStyle: styles.header
//     }
//   }
// );

// const BarCode = createStackNavigator(
//   {
//     HomeScreen: { screen: HomeScreen },
//     ProfileScreen: { screen: ProfileScreen }
//   },
//   {
//     // Default config for all screens
//     headerMode: "float",
//     initialRouteName: "ProfileScreen",
//     appStyle: {
//       portraitOnlyMode: true
//     },
//     defaultNavigationOptions: {
//       header: props => <Header {...props} />,
//       headerStyle: styles.header
//     }
//   }
// );

// const Message = createStackNavigator(
//   {
//     HomeScreen: { screen: HomeScreen },
//     ProfileScreen: { screen: ProfileScreen }
//   },
//   {
//     // Default config for all screens
//     headerMode: "float",
//     initialRouteName: "ProfileScreen",
//     appStyle: {
//       portraitOnlyMode: true
//     },
//     defaultNavigationOptions: {
//       header: props => <Header {...props} />,
//       headerStyle: styles.header
//     },
//     navigationOptions: {
//       tabBarLabel: "Home!",
//     }
//   }
// );

// const Tabs = createBottomTabNavigator({ Call, BarCode, Message });


export default createAppContainer(PrimaryNav);
