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
    padding: 65,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 80
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
    marginTop: 15
  },
  tagLine: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center"
  },
});
