import React, { Component } from 'react'

export default class Preconnect extends Component {

    render() {
        return (
            <>
                <p class="italicInfo">Vous souhaitez que Cursy analyse votre conduite ?</p>
                <p>Il vous suffit de créer un compte pour sauvegarder vos données en ligne et pouvoir y accéder à tout moment.</p>
                <div class="signWrapper">
                    <a class="blueButton">Créer mon compte</a>
                    <a class="blueButton">J'ai déjà un compte</a>

                    {/* TODO  REMETTRE EN PLACE LES MÉTHODES
                    <a onclick="loadSignMethod(signUp_link)" class="blueButton">Créer mon compte</a>
                    <a onclick="loadSignMethod(signIn_link)" class="blueButton">J'ai déjà un compte</a> */}
                </div>
            </>
        )
    }
}
