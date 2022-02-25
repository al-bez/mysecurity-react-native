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
  landscapeContainer: { paddingBottom: 0 },
  backgroundContainer: {
    width: screenWidth,
    height: screenHeight,
    paddingBottom: 80
  },
  subContainer: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 65,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 80
  },
  logo: {
    marginBottom: 60
  },
  landscapeLogo: {
    marginBottom: 10
  },
 
  facebook: {
    ...socialIconButton,
    marginRight: 5,
    borderColor: Colors.PRIMARY,
    backgroundColor: Colors.PRIMARY
  },
  underlineText: {
    ...pageTitle
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
  input: {
    marginBottom: 10
  },
  button: {
    marginVertical: 15,
    width: "70%"
  },
  backButton: {
    backgroundColor: "lightgray",
    marginTop: 10,
    width: 100
  },
  tagLine: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10
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
  facebookButton: {
    height: 55,
    flexDirection: "row",
    backgroundColor: Colors.PRIMARY,
    justifyContent: "space-around",
    alignItems: "center",
    width: "70%",
    borderRadius: 10
  },
  facebookButtonText: { color: "white", fontWeight: "bold", paddingRight: 50 },
  dobIcon: { fontSize: icons.small },
  loginIcons: { fontSize: 17, width: 25 },
  mobileIcon: { fontSize: 20, width: 30 },
  picker: { position: "absolute", width: "100%" }
});
