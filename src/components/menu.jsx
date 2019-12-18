import React from 'react'

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

import SettingsIcon from '@material-ui/icons/Settings'
import GradeIcon from '@material-ui/icons/Grade'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import NavigationIcon from '@material-ui/icons/Navigation'


export default function Menu() {
    const [value, setValue] = React.useState( 0 )

    return (
        <BottomNavigation
            value={value}
            onChange={( event, newValue ) => { setValue( newValue ) }}
            showLabels>
            <BottomNavigationAction label="Navigation" icon={<NavigationIcon />} />
            <BottomNavigationAction label="Statistiques" icon={<EqualizerIcon />} />
            <BottomNavigationAction label="Palmarès" icon={<GradeIcon />} />
            <BottomNavigationAction label="Paramètres" icon={<SettingsIcon />} />
        </BottomNavigation>
    )
}

