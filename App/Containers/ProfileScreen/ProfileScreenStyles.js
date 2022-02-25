import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../Themes'

const {
  size,
  style: { pageTitle }
} = Fonts
const { screenWidth, screenHeight, icons } = Metrics
const socialIconButton = {
  width: 52,
  height: 52,
  borderWidth: 2.5,
  borderRadius: 50,
  justifyContent: 'center',
  alignItems: 'center'
}

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND
  },

  ProfileImageContainer: {
    borderWidth: 4,
    height: 100,
    width: 100,
    borderRadius: 50,
    // width: "50%",
    borderColor: Colors.PRIMARY
  },
  ProfileImage: {
    height: 35,
    width: 100,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "white",
    marginTop: 10,
    marginLeft: 20
  },
  LoyalityHeaderStyle: {
    height: 80,
    backgroundColor: Colors.PRIMARY,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 10
  },
  LoyalityText: { color: "white", fontWeight: "bold" },
  ProfileHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    top: -20,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 10
  },

  textInputStyle: {
    paddingLeft: 10,
    height: 45,
    borderWidth: 0.5,
    width: "90%",
    borderRadius: 10,
    marginBottom: 20,
    borderColor: Colors.PRIMARY
  },
  subContainer: {
    height: "25%",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    marginBottom: 80
  },
  landscapeLogo: {
    marginBottom: 10
  },
  google: {
    ...socialIconButton,
    borderColor: Colors.GOOGLE
  },
  googleOffset: {
    marginLeft: 4
  },
  facebook: {
    ...socialIconButton,
    marginRight: 5,
    borderColor: Colors.PRIMARY,
    backgroundColor: Colors.PRIMARY
  },

  subSection: {
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 15
  },
  subSectionColumn: {
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15
  },
  socialSection: {
    paddingTop: 5,
    paddingBottom: 20
  },
  button: {
    marginTop: 15,
    width: "60%"
  },
  tagLine: {
    height: 60,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20
  }
});
