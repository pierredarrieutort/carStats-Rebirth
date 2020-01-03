import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views'
import Navigation from './components/main-views/navigation'
import Statistiques from './components/main-views/statistiques'
import Palmares from './components/main-views/palmares'
import Parametres from './components/main-views/parametres'
import { Menu, Titre } from './components/menu'
import SignIn from './components/login-views/signin'

export default class App extends Component {

  constructor( props ) {
    super( props )

    this.state = {
      currentPage: '0'
    }
  }

  pageChange = i => this.setState( { currentPage: String( i ) } )

  render() {

    const
      pagesName = [
        'Navigation',
        'Statistiques',
        'Palmarès',
        'Paramètres'
      ],
      metrics = {
        mph: 2.23694,
        kmh: 3.6,
        mphName: ' mph',
        kmhName: ' km/h',
        mi: 0.000621371,
        km: 0.001,
        miName: ' mi',
        kmName: ' km'
      },
      appOpts = {
        speedCoef: metrics.kmh,
        distanceCoef: metrics.km,
      }



    return (
      <>
        <Titre currentPageName={pagesName[this.state.currentPage]} />
        <SwipeableViews
          enableMouseEvents
          index={parseInt( this.state.currentPage )}
          onChangeIndex={this.pageChange}>
          <section className="pageWrapper page1"><Navigation /></section>
          <section className="pageWrapper page2"><Statistiques /></section>
          <section className="pageWrapper page3"><Palmares params={appOpts} /></section>
          <section className="pageWrapper page4"><Parametres /></section>
          <section className="pageWrapper page5"><SignIn /></section>
        </SwipeableViews>
        <Menu value={this.state.currentPage} pages={this.pageChange} pagesLabel={pagesName} />
      </>
    )
  }
}
