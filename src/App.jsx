import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views'

class App extends Component {
  constructor( props ) {


    super( props )

    this.state = {
      currentPage: 1
    }

  }


  handleChange = el => this.setState( { currentPage: el.target.value } )

  currentPage = i => this.setState( { currentPage: i } )


  render() {
    return (

      <>
        <nav>
          <ul>
            <li onClick={this.handleChange} value='0'>slider1</li>
            <li onClick={this.handleChange} value='1'>slider2</li>
            <li onClick={this.handleChange} value='2'>slider3</li>
          </ul>
        </nav>
        <SwipeableViews enableMouseEvents index={this.state.currentPage} onChangeIndex={this.currentPage}>
          <section className="slide slide1">slide n°1</section>
          <section className="slide slide2">slide n°2</section>
          <section className="slide slide3">slide n°3</section>
        </SwipeableViews>
      </>

    )
  }
}

export default App
