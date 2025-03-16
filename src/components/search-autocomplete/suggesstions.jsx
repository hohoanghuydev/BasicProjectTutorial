import React from 'react'

const Suggesstions = ({ data, handleClickItem }) => {
    return (
        <ul>
            {
                data && data.length && data.map((item) => (
                    <li onClick={() => handleClickItem(item)}>{item}</li>
                ))
            }
        </ul>
    )
}

export default Suggesstions
