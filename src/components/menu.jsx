import React from 'react'

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

import SettingsIcon from '@material-ui/icons/Settings'
import GradeIcon from '@material-ui/icons/Grade'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import NavigationIcon from '@material-ui/icons/Navigation'


export default function Menu( props ) {
    return (
        <BottomNavigation
            onChange={( e, event ) => { props.pages( event ) }}
            value={props.value}
            showLabels >
            <BottomNavigationAction value='0' label="Navigation" icon={<NavigationIcon />} />
            <BottomNavigationAction value='1' label="Statistiques" icon={<EqualizerIcon />} />
            <BottomNavigationAction value='2' label="Palmarès" icon={<GradeIcon />} />
            <BottomNavigationAction value='3' label="Paramètres" icon={<SettingsIcon />} />
        </BottomNavigation>
    )
}

