import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views'
import Navigation from './components/navigation'
import Statistiques from './components/statistiques'
import Palmares from './components/palmares'
import Parametres from './components/parametres'
import {Menu, Titre} from './components/menu'

export default class App extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      currentPage: '0',
      currentPageName: ''
    }
  }

  pageChange = i => this.setState( { 
    currentPage: String( i ),
    currentPageName : i
  } )

  render() {
    return (
      <>
      <Titre currentPageName={this.state.currentPageName} />
        <SwipeableViews
          enableMouseEvents
          index={parseInt( this.state.currentPage )}
          onChangeIndex={this.pageChange}>
          <section className="pageWrapper page1"><Navigation /></section>
          <section className="pageWrapper page2"><Statistiques /></section>
          <section className="pageWrapper page3"><Palmares /></section>
          <section className="pageWrapper page4"><Parametres /></section>
        </SwipeableViews>
        <Menu value={this.state.currentPage} pages={this.pageChange} />
      </>
    )
  }
}
