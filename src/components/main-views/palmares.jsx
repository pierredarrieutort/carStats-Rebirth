import React, { Component } from 'react'
import { round, multiply } from 'mathjs'
import { duration } from 'moment'
import { Typography } from '@material-ui/core'

export default class Palmares extends Component {

    constructor( props ) {
        super( props )

        this.state = {
            data: {
                "byDistance": [],
                "bySpeed": [],
                "byTime": []
            }
        }
    }

    componentDidMount() {
        fetch( 'https://cors-anywhere.herokuapp.com/https://pierredarrieutort.fr/carstats/server/ajax/palmares.php' )
            .then( response => response.json() )
            .then( response => {
                const
                    { speedCoef, distanceCoef } = this.props.metrics,
                    distance = response.byDistance.map( el => `["${el[0]}",${round( multiply( el[1], distanceCoef ), 2 )}]` ),
                    speed = response.bySpeed.map( el => `["${el[0]}",${round( multiply( el[1], speedCoef ), 2 )}]` ),
                    time = response.byTime.map( el => `["${el[0]}","${duration( parseInt( el[1] ), 'seconds' ).hours() + 'h ' + duration( parseInt( el[1] ), 'seconds' ).minutes() + 'm'}"]` )
                this.setState( {
                    data: JSON.parse(
                        `{"byDistance":[${distance}],"bySpeed":[${speed}],"byTime":[${time}]}`
                    )
                } )
            } )
    }


    render() {
        const { speedUnit, distanceUnit } = this.props.metrics
        return (
            <>
                <div id='distances' className="palma">
                    <Typography align='center' variant="h2" className="MuiTypography-h6" >Les plus longues distances</Typography>
                    <Treatment data={this.state.data.byDistance} unit={distanceUnit} />
                </div>
                <div id='vitesses' className="palma">
                    <Typography align='center' variant="h2" className="MuiTypography-h6" >Les plus grandes vitesses</Typography>
                    <Treatment data={this.state.data.bySpeed} unit={speedUnit} />
                </div>
                <div id='durees' className="palma">
                    <Typography align='center' variant="h2" className="MuiTypography-h6" >Les plus longs trajets</Typography>
                    <Treatment data={this.state.data.byTime} />
                </div>
            </>
        )
    }
}


function Treatment( props ) {
    return (
        <ul>
            {
                props.data.map( ( el, index ) => {
                    return (
                        <li key={index} >
                            <span>{el[0]}</span>
                            <span>{props.unit ? el[1] + props.unit : el[1]}</span>
                        </li>
                    )
                } )
            }
        </ul>
    )
}
