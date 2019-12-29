import React, { Component } from 'react'

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
                    distance = response.byDistance.map( el => `["${el[0]}",${el[1] * 2}]` ),
                    speed = response.bySpeed.map( el => `["${el[0]}",${el[1] * 2}]` ),
                    time = response.byTime.map( el => `["${el[0]}",${el[1] * 2}]` )
                this.setState( {
                    data: JSON.parse(
                        `{"byDistance":[${distance}],"bySpeed":[${speed}],"byTime":[${time}]}`
                    )
                } )
            } )
    }


    render() {
        return (
            <>
                <div id='distances' className="palma">
                    <h2>Les plus longues distances</h2>
                    <Treatment data={this.state.data.byDistance} />
                </div>
                <div id='vitesses' className="palma">
                    <h2>Les plus grandes vitesses</h2>
                    <Treatment data={this.state.data.bySpeed} />
                </div>
                <div id='durees' className="palma">
                    <h2>Les plus longs trajets</h2>
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
                props.data.map( ( el, index ) => { return <li key={index} >{el[0]} : {el[1]}</li> } )
            }
        </ul>
    )
}




        // scripts: initPalmares()
