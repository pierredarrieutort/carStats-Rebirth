import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

export default class Preconnect extends Component {

    render() {
        return (
            <>
                <p>Vous souhaitez que Cursy analyse votre conduite ?</p>
                <p>Il vous suffit de créer un compte pour sauvegarder vos données en ligne et pouvoir y accéder à tout moment.</p>
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <Button>Créer mon compte</Button>
                    <Button>J'ai déjà un compte</Button>
                </ButtonGroup>
                {/* TODO  REMETTRE EN PLACE LES MÉTHODES
                    <a onclick="loadSignMethod(signUp_link)" class="blueButton">Créer mon compte</a>
                    <a onclick="loadSignMethod(signIn_link)" class="blueButton">J'ai déjà un compte</a> */}
            </>
        )
    }
}
