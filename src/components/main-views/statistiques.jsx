import React, { Component } from 'react'
import { round, multiply } from 'mathjs'
import { duration, unix } from 'moment'
// import SignIn from '../login-views/signin'
// import SignUp from '../login-views/signup'
// import Preconnect from '../login-views/preconnect'

export default class Statistiques extends Component {

  constructor( props ) {
    super( props )

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch( "https://cors-anywhere.herokuapp.com/https://pierredarrieutort.fr/carstats/server/ajax/displayStats.php",
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: "userId=31",
        method: "POST"
      }
    )
      .then( response => response.json() )
      .then( response => {

        if ( response.res[0] ) {
          this.setState( {
            data: []
          } )

          const datasNames = Object.keys( response.res[0] )
          response.res.forEach( ( el, i ) => {

            const { speedCoef, distanceCoef } = this.props.metrics

            const
              maxSpeed = round( multiply( el[datasNames[0]], speedCoef ) ),
              avgSpeed = round( multiply( el[datasNames[1]], speedCoef ), 2 ),
              distance = round( multiply( el[datasNames[2]], distanceCoef ), 2 ),
              duree = duration( parseInt( el[datasNames[3]] ), 'seconds' ).hours() + 'h ' + duration( parseInt( el[datasNames[3]] ), 'seconds' ).minutes() + 'm',
              depart = unix( el[datasNames[4]] ).format( 'dddd DD/MM/YY, HH:mm' ),
              startCity = JSON.parse( el[datasNames[5]] ).start_city,
              endCity = JSON.parse( el[datasNames[5]] ).end_city,
              departDate = depart.split( ',' )[0],
              departHour = depart.split( ',' ).pop().trim()

            this.setState( {
              data: [
                ...this.state.data,
                maxSpeed,
                avgSpeed,
                distance,
                duree,
                depart,
                startCity,
                endCity,
                departDate,
                departHour
              ]
            } )


            // this.setState( {
            //   data: this.state.data +
            //     '<div class="trajetWrap_' + i + '">' +
            //     '<div class="infos">' +
            //     '<div class="date">' +
            //     '<div class="jour">' + departDate + '</div>' +
            //     '<div class="heure">' + departHour + '</div>' +
            //     '</div>' +
            //     '<div class="cities">' +
            //     '<div class="from"><img class="iconCities" src="./images/map-pin.svg" alt="départ"><span>&nbsp;De :&nbsp;</span>' + startCity + '</div>' +
            //     '<div class="to"><img class="iconCities" src="./images/map-pin.svg" alt="arrivée parcourue"><span>&nbsp;À :&nbsp;</span>' + endCity + '</div>' +
            //     '</div>' +
            //     '</div>' +
            //     '<div class="stats">' +
            //     '<div class="distanceStat"><img class="iconStat" src="./images/distance.svg" alt="distance parcourue"><div class="valueStat">' + distance + '&nbsp;<span class="unitDistanceWrapper"></span></div></div>' +
            //     '<div class="avgStat"><img class="iconStat" src="./images/average_speed.svg" alt="vitesse moyenne"><div class="valueStat">' + avgSpeed + '&nbsp;<span class="unitWrapper"></span></div></div>' +
            //     '<div class="maxStat"><img class="iconStat" src="./images/max_speed.svg" alt="vitesse maximale"><div class="valueStat">' + maxSpeed + '&nbsp;<span class="unitWrapper"></span></div></div>' +
            //     '<div class="durationStat"><img class="iconStat" src="./images/duration.svg" alt="durée du trajet"><div class="valueStat">' + duree + '</div></div>' +
            //     '</div>' +
            //     '</div><br>'
            // } )

            // if ( startCity == endCity || startCity == "" ) document.querySelector( '.trajetWrap_' + i + ' .from' ).style.opacity = 0
            // if ( endCity == "" ) document.querySelector( '.trajetWrap_' + i + ' .to' ).style.opacity = 0
          } )
        } else {
          // this.setState( {
          //   data: "Effectuez au moins un trajet pour afficher vos statistiques ici."
          // } )
        }
      } )
  }

  render() {
    return (
      <Treatment data={this.state.data} />
    )
  }
}


function Treatment( props ) {

  const divider = 9

  if ( props.data.length % divider === 0 ) {
    const travels = []
    for ( let i = 0; i < props.data.length / divider; i++ ) {
      travels.push( props.data.slice( i * divider, i * divider + divider ) )
    }

    return (
      <ul>
        {
          travels.map( ( el, index ) => {
            const
              maxSpeed = el[0],
              avgSpeed = el[1],
              distance = el[2],
              duree = el[3],
              depart = el[4],
              startCity = el[5],
              endCity = el[6],
              departDate = el[7],
              departHour = el[8]
            console.log( maxSpeed, avgSpeed, distance, duree, depart, startCity, endCity, departDate, departHour )
            return (
              <>
                <div key={index} class="trajetWrap">
                  <div class="infos">
                    <div class="date">
                      <div class="jour">{departDate}</div>
                      <div class="heure">{departHour}</div>
                    </div>
                    <div class="cities">
                      <div class="from"><img class="iconCities" src="./images/map-pin.svg" alt="départ" /><span>&nbsp;De :&nbsp;</span>{startCity}</div>
                      <div class="to"><img class="iconCities" src="./images/map-pin.svg" alt="arrivée parcourue" /><span>&nbsp;À :&nbsp;</span>{endCity}</div>
                    </div>
                  </div>
                  <div class="stats">
                    <div class="distanceStat">
                      <img class="iconStat" src="./images/distance.svg" alt="distance parcourue" />
                      <div class="valueStat">{distance}&nbsp;<span class="unitDistanceWrapper"></span>
                      </div>
                    </div>
                    <div class="avgStat">
                      <img class="iconStat" src="./images/average_speed.svg" alt="vitesse moyenne" />
                      <div class="valueStat">{avgSpeed}&nbsp;<span class="unitWrapper"></span>
                      </div>
                    </div>
                    <div class="maxStat">
                      <img class="iconStat" src="./images/max_speed.svg" alt="vitesse maximale" />
                      <div class="valueStat">{maxSpeed}&nbsp;<span class="unitWrapper"></span>
                      </div>
                    </div>
                    <div class="durationStat">
                      <img class="iconStat" src="./images/duration.svg" alt="durée du trajet" />
                      <div class="valueStat">{duree}</div>
                    </div>
                  </div>
                </div>
              </>
            )
          } )
        }
      </ul>
    )
  } else { console.log( 'Erreur traitement statistiques' ) }
}





      // TODO scripts: verifyConnexion(page2), initLang()
