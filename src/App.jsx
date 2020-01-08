import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views'
import Navigation from './components/main-views/navigation'
import Statistiques from './components/main-views/statistiques'
import Palmares from './components/main-views/palmares'
import Parametres from './components/main-views/parametres'
import { Menu, Titre } from './components/menu'

export default class App extends Component {

  constructor( props ) {
    super( props )

    const
      GlobalStateDefaultValues = {
        currentPage: '3',
        pageName: [
          'Navigation',
          'Statistiques',
          'Palmarès',
          'Paramètres'
        ],
        metrics: {
          mph: 2.23694,
          kmh: 3.6,
          mphName: ' mph',
          kmhName: ' km/h',
          mi: 0.000621371,
          km: 0.001,
          miName: ' mi',
          kmName: ' km'
        }
      },
      GlobalStateOptions = {
        appOpts: {
          speedCoef: GlobalStateDefaultValues.metrics.kmh,
          distanceCoef: GlobalStateDefaultValues.metrics.km,
          speedUnit: GlobalStateDefaultValues.metrics.kmhName,
          distanceUnit: GlobalStateDefaultValues.metrics.kmName,
          theme: true
        }
      },
      GlobalStateInit = Object.assign( GlobalStateDefaultValues, GlobalStateOptions )
    this.state = GlobalStateInit
  }

  pageChange = i => this.setState( { currentPage: String( i ) } )

  render() {
    return (
      <>
        <Titre currentPageName={this.state.pageName[this.state.currentPage]} />
        <SwipeableViews
          enableMouseEvents
          index={parseInt( this.state.currentPage )}
          onChangeIndex={this.pageChange}>
          <section className="pageWrapper page1"><Navigation /></section>
          <section className="pageWrapper page2"><Statistiques metrics={this.state.appOpts} /></section>
          <section className="pageWrapper page3"><Palmares metrics={this.state.appOpts} /></section>
          <section className="pageWrapper page4"><Parametres params={this.state.appOpts} /></section>
        </SwipeableViews>
        <Menu value={this.state.currentPage} pages={this.pageChange} pagesLabel={this.state.pageName} />
      </>
    )
  }
}
