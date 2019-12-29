import React, { Component } from 'react'

export default class Palmares extends Component {

    render() {
        return (
            <>
                <div id='distances' className="palma">
                    <h2>Les plus longues distances</h2>
                    <ul></ul>
                </div>
                <div id='vitesses' className="palma">
                    <h2>Les plus grandes vitesses</h2>
                    <ul></ul>
                </div>
                <div id='durees' className="palma">
                    <h2>Les plus longs trajets</h2>
                    <ul></ul>
                </div>
            </>
        )
    }
}


// scripts: initPalmares()
