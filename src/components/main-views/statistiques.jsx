import React, { Component } from 'react'
import { round, multiply } from 'mathjs'
import { duration, unix } from 'moment'
import { List, ListItem, ListItemText, Divider } from '@material-ui/core'
import { Room as RoomIcon, Speed as SpeedIcon, Timer as TimerIcon } from '@material-ui/icons'

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
        body: "userId=31", // 24
        method: "POST"
      }
    )
      .then( response => response.json() )
      .then( response => {

        if ( response.res[0] ) {
          this.setState( {
            data: ''
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
          } )
        } else {
          this.setState( {
            data: "Effectuez au moins un trajet pour afficher vos statistiques ici."
          } )
        }
      } )
  }

  render() {
    const divider = 9

    if ( Array.isArray( this.state.data ) ) {

      if ( this.state.data.length % divider === 0 ) {
        const travels = []
        for ( let i = 0; i < this.state.data.length / divider; i++ ) {
          travels.push( this.state.data.slice( i * divider, i * divider + divider ) )
        }

        return (
          <List>
            {
              travels.map( ( el, index ) => {
                const
                  maxSpeed = el[0],
                  avgSpeed = el[1],
                  distance = el[2],
                  duree = el[3],
                  // depart = el[4],
                  startCity = el[5],
                  endCity = el[6],
                  departDate = el[7],
                  departHour = el[8],
                  { speedUnit, distanceUnit } = this.props.metrics

                return (
                  <ListItem key={index}>
                    <div className="trajetWrap">
                      <div className="infos">
                        <div className="date">
                          <ListItemText primary={departDate} secondary={departHour} />
                        </div>
                        <div className="cities">
                          <div className="from" style={startCity === endCity || startCity === "" ? { display: 'none' } : {}} >
                            <RoomIcon /><span>&nbsp;De :&nbsp;</span>{startCity}</div>
                          <div className="to" style={endCity === "" ? { display: 'none' } : {}} >
                            <RoomIcon /><span>&nbsp;À :&nbsp;</span>{endCity}</div>
                        </div>
                      </div>
                      <div className="stats">
                        <div className="distanceStat">
                          <img className="iconStat" src={require( '../../icons/distance.svg' )} alt="distance parcourue" />
                <div className="valueStat">{distance}&nbsp;<span className="unitDistanceWrapper">{distanceUnit}</span>
                          </div>
                        </div>
                        <div className="avgStat">
                          <img className="iconStat" src={require( '../../icons/average_speed.svg' )} alt="vitesse moyenne" />
                          <div className="valueStat">{avgSpeed}&nbsp;<span className="unitWrapper">{speedUnit}</span>
                          </div>
                        </div>
                        <div className="maxStat">
                          <SpeedIcon />
                          <div className="valueStat">{maxSpeed}&nbsp;<span className="unitWrapper">{speedUnit}</span>
                          </div>
                        </div>
                        <div className="durationStat">
                          <TimerIcon />
                          <div className="valueStat">{duree}</div>
                        </div>
                      </div>
                    </div>
                    <Divider />
                  </ListItem>
                )
              } )
            }
          </List >
        )
      } else { console.log( 'Erreur traitement statistiques' ) }
    } else { return <i> {this.state.data} </i> }
  }
}

// TODO scripts: verifyConnexion(page2), initLang()
