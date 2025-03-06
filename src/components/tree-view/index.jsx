import React from 'react'
import data from './data'
import MenuList from './menu-list'

const TreeView = ({ menus = [] }) => {
    return (
        <div className='tree-view-container'>
            <MenuList list={menus} />
        </div>
    )
}

export default TreeView
