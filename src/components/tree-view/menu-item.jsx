import React, { useState } from 'react'
import MenuList from './menu-list'

const MenuItem = ({ item }) => {
    const [displayChildren, setDisplayChildren] = useState({})

    const handleOnClick = (currentLabel) => {
        setDisplayChildren({
            ...displayChildren,
            [currentLabel]: !displayChildren[currentLabel]
        })

        console.log(displayChildren)
    }

    return (
        <li >
            {item.label}
            {item.children && item.children.length ?
                <span onClick={() => handleOnClick(item.label)}>
                    {displayChildren[item.label] ? '-' : '+'}
                </span>
                : null}

            {
                item && item.children && item.children.length > 0 && displayChildren[item.label] ?
                    <MenuList list={item.children} />
                    : null
            }
        </li>
    )
}

export default MenuItem
