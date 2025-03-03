import React, { useState } from 'react'
import data from './data'
import './styles.css'

const Accordian = () => {
    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    const handleSingleClick = (currentId) => {
        setSelected(currentId === selected ? null : currentId)
    }

    const handleMultiSelection = (currentId) => {
        let cpySelection = [...multiple]

        let itemExist = multiple.indexOf(currentId)

        if (itemExist === -1)
            cpySelection.push(currentId)
        else
            cpySelection.splice(itemExist, 1)

        setMultiple(cpySelection)
    }

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>{!enableMultiSelection ? "Enable" : "Disable"} Multi Selection</button>

            <div className='accordian'>
                {
                    data && data.length > 0 ?
                        data.map((dataItem, dataIndex) => {
                            return <div onClick={
                                enableMultiSelection ?
                                    () => handleMultiSelection(dataItem.id)
                                    : () => handleSingleClick(dataItem.id)} className='item' key={dataIndex}>
                                <div className="title">
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    enableMultiSelection ?
                                        multiple.indexOf(dataItem.id) !== -1 && <div className="content">{dataItem.answer}</div>
                                        : selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                                }
                            </div>
                        }) : <div>No data found</div>
                }
            </div>
        </div>
    )
}

export default Accordian
