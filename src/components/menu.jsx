import React from 'react'

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import SettingsIcon from '@material-ui/icons/Settings'
import GradeIcon from '@material-ui/icons/Grade'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import NavigationIcon from '@material-ui/icons/Navigation'


export function Menu( props ) {
    return (
        <BottomNavigation
            onChange={( e, value ) => { props.pages( value ) }}
            value={props.value}
            showLabels >
            <BottomNavigationAction value='0' label={props.pagesLabel[0]} icon={<NavigationIcon />} />
            <BottomNavigationAction value='1' label={props.pagesLabel[1]} icon={<EqualizerIcon />} />
            <BottomNavigationAction value='2' label={props.pagesLabel[2]} icon={<GradeIcon />} />
            <BottomNavigationAction value='3' label={props.pagesLabel[3]} icon={<SettingsIcon />} />
        </BottomNavigation>
    )
}

export function Titre( props ) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h1" className="MuiTypography-h6" >{props.currentPageName}</Typography>
            </Toolbar>
        </AppBar>
    )
}

