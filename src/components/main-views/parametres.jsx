import React, { Component } from 'react'
import { List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader, Switch } from '@material-ui/core'
import { EmojiObjects as EmojiObjectsIcon, SquareFoot as SquareFootIcon } from '@material-ui/icons'


export default class Parametres extends Component {

    constructor( props ) {
        super( props )

        this.state = {
            lightTheme: true,
            imperialSystem: false
        }
    }

    handleToggle = el => { this.setState( { [el]: !this.state[el] } ) }

    render() {
        return (
            <List subheader={<ListSubheader>Settings</ListSubheader>}>
                <ListItem>
                    <ListItemIcon><EmojiObjectsIcon /></ListItemIcon>
                    <ListItemText id="switch-list-label-lightTheme" primary="Light Theme" />
                    <ListItemSecondaryAction>
                        <Switch edge="end" onChange={() => this.handleToggle( 'lightTheme' )} checked={this.state.lightTheme} inputProps={{ 'aria-labelledby': 'switch-list-label-lightTheme' }} color="primary" />
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemIcon><SquareFootIcon /></ListItemIcon>
                    <ListItemText id="switch-list-label-imperialSystem" primary="Imperial System" />
                    <ListItemSecondaryAction>
                        <Switch edge="end" onChange={() => this.handleToggle( 'imperialSystem' )} checked={this.state.imperialSystem} inputProps={{ 'aria-labelledby': 'switch-list-label-imperialSystem' }} color="primary" />
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        )
    }
}
