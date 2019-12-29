import React, { Component } from 'react'

export default class Palmares extends Component {

    constructor( props ) {
        super( props )

        this.state = {
            data: {
                "byDistance": [
                    ["Lucas", "72354"], ["Pierre", "57873"], ["Pierre", "39271"], ["Lucas", "36191"], ["Lucas", "30084"], ["Pierre", "24056"], ["Lucas", "22121"], ["Pierre", "16531"], ["Pierre", "11488"], ["Pierre", "10066"]],
                "bySpeed": [
                    ["Pierre", "44"], ["Pierre", "43"], ["Pierre", "42"], ["Pierre", "41"], ["Pierre", "35"], ["Pierre", "32"], ["Pierre", "31"], ["Pierre", "25"], ["Lucas", "25"], ["Pierre", "25"]],
                "byTime": [
                    ["Lucas", "11341"], ["Lucas", "8568"], ["Pierre", "1205"], ["Pierre", "990"], ["Pierre", "887"], ["Lucas", "782"], ["Pierre", "694"], ["Pierre", "692"], ["Lucas", "624"], ["Pierre", "558"]]
            }
        }
    }

    componentDidMount() {
        fetch( 'https://cors-anywhere.herokuapp.com/https://pierredarrieutort.fr/carstats/server/ajax/palmares.php' )
            .then( response => response.json() )
        // .then( response => this.setState( { data: response } ) )
        // .then( this.setState( { data: { byDistance: { username: "Lucas", score: 72354 } } } ) )
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
