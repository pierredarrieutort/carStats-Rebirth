import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views'
import Navigation from './components/navigation'
import Statistiques from './components/statistiques'
import Palmares from './components/palmares'
import Parametres from './components/parametres'
import Menu from './components/menu'

export default class App extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      currentPage: 0
    }

    this.handleChange = this.handleChange.bind( this )
  }

  handleChange = el => { this.setState( { currentPage: el } ); console.log( el ) }
  currentPage = i => this.setState( { currentPage: i } )

  render() {
    return (
      <>
        <ul>
          <li onClick={this.handleChange} value='0'>Navigation</li>
          <li onClick={this.handleChange} value='1'>Statistiques</li>
          <li onClick={this.handleChange} value='2'>Palmarès</li>
          <li onClick={this.handleChange} value='3'>Paramètres</li>
        </ul>
        <SwipeableViews enableMouseEvents index={parseInt( this.state.currentPage )} onChangeIndex={this.currentPage}>
          <section className="pageWrapper page1"><Navigation /></section>
          <section className="pageWrapper page2"><Statistiques /></section>
          <section className="pageWrapper page3"><Palmares /></section>
          <section className="pageWrapper page4"><Parametres /></section>
        </SwipeableViews>
        <Menu value={this.value} pages={this.handleChange} />
      </>
    )
  }
}
