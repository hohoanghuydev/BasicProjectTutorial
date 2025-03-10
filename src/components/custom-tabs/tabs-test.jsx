import React from 'react'
import Tabs from './tabs'
import './styles.css'


const RandomContent = () => {
    return <div>Random content</div>
}

const TabTest = () => {
    const tabs = [
        {
            label: 'Tab 1',
            content: <div>This is tab 1</div>
        },
        {
            label: 'Tab 2',
            content: <div>This is tab 2</div>
        },
        {
            label: 'Tab 3',
            content: <RandomContent />
        },
    ]

    const handleChange = (currentTabIndex) => {

    }

    return <Tabs onChange={handleChange} tabsContent={tabs} />
}

export default TabTest
