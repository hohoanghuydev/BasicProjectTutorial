import React from 'react'
import CheckerBoard from '../caro-game'
import TreeView from '../tree-view'
import Accordian from '../accordian'
import RandomColor from '../random-color'
import LightDarkMode from '../light-dark-mode'

const FeatureFlags = () => {

    const componentsToRender = [
        {
            key: 'showTicTacToe',
            component: <CheckerBoard />
        },
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkMode />
        },
        {
            key: 'showRandomColor',
            component: <RandomColor />
        },
        {
            key: 'showAccordian',
            component: <Accordian />
        },
        {
            key: 'showTreeView',
            component: <TreeView />
        },

    ]
    return (
        <div>
            <h1>Feature Flags</h1>
        </div>
    )
}

export default FeatureFlags
