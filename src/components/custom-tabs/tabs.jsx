import React, { useState } from 'react'

const Tabs = ({ tabsContent, onChange }) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0)

    const handleOnClick = (currentIndex) => {
        setCurrentTabIndex(currentIndex)
        onChange(currentIndex)
    }

    return (
        <div className="wrapper">
            <div className="heading">
                {tabsContent.map(((itemTab, index) => (
                    <div className={`tab-item ${currentTabIndex === index ? 'active' : ''}`} key={itemTab.label} onClick={() => handleOnClick(index)}>
                        <span className='label'>{itemTab.label}</span>
                    </div>
                )))}
            </div>
            <div className="content">
                {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
            </div>
        </div>
    )
}

export default Tabs
