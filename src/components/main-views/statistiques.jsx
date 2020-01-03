import React, { Component } from 'react'
// import SignIn from '../login-views/signin'
// import SignUp from '../login-views/signup'
// import Preconnect from '../login-views/preconnect'

export default class Statistiques extends Component {

  componentDidMount() {
    fetch( 'https://cors-anywhere.herokuapp.com/https://pierredarrieutort.fr/carstats/server/ajax/displayStats.php', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( { userId: 31 } )
    } ).then( response => response.json() )
      .then( response => console.log( response ) );
  }

  render() {
    return (
      <>

      </>
    )
  }
}


// TODO scripts: verifyConnexion(page2), initLang()
