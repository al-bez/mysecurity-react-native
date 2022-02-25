import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import i18n from 'react-native-i18n'
import { Images, Colors } from '../../Themes'
import SessionActions from '../../Redux/SessionRedux'
import { Title } from '../../Components/Common'
import ImageTiles from './ImageTiles'
import IconTile from './IconTile'
import styles from './HomeStyles'

class Home extends Component {
  getTilesData () {
    return [
      {
        text: `Motor\nAll Risk`,
        image: Images.CAR
      },
      {
        text: `Medical\nInsurance\nPlans`,
        image: Images.DOCTORS
      },
      {
        text: `Motor\nAll Risk`,
        image: Images.CAR
      },
      {
        text: `Medical\nInsurance\nPlans`,
        image: Images.DOCTORS
      }
    ]
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Title text={i18n.t('myPortfolio')} icon='anchor' />
          <ImageTiles tilesData={this.getTilesData()} />
          <Title text={i18n.t('assistance')} />
          <View style={styles.iconTiles}>
            <IconTile
              style={styles.iconTile}
              text='PROPERTY'
              icon='property'
              color={Colors.PRIMARY}
            />
            <IconTile
              style={styles.iconTile}
              text='MEDICAL'
              icon='stethoscope'
              color={Colors.PEACH}
            />
            <IconTile
              style={styles.iconTile}
              text='MOTOR'
              icon='dashboard'
              color={Colors.MINT}
            />
            <IconTile
              style={styles.iconTile}
              text='TRAVEL'
              icon='suitcase'
              color={Colors.GRAY}
            />
          </View>
          <Title text={i18n.t('eCommerce')} />
        </ScrollView>
      </View>
    )
  }
}

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
    session: { user, loggedIn }
  } = state
  return { user, loggedIn }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
