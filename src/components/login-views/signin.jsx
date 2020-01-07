import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';

export default class SignIn extends Component {

    render() {
        return (
            <>
                <form noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Standard" />
                </form>
            </>
        )
    }
}
