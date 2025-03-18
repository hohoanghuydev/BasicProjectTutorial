import React from 'react'

const Square = ({ value, checkItem }) => {
    return (
        <button onClick={checkItem} className='square'>
            {value}
        </button>
    )
}

export default Square
