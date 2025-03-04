import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './styles.css'

const StarRating = ({ noOfStars = 5 }) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleOnClick = (currentOfIndex) => {
        setRating(currentOfIndex)
    }

    const handleMouseEnter = (currentOfIndex) => {
        setHover(currentOfIndex)
    }

    const handleMouseLeave = () => {
        setHover(rating)
    }

    return (
        <div className='star-rating'>
            {
                [...Array(noOfStars)].map((_, index) => {
                    index += 1

                    return <FaStar
                        size={40}
                        key={index}
                        className={index <= (hover || rating) ? 'active' : 'inactive'}
                        onClick={() => handleOnClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                    />
                })
            }
        </div>
    )
}

export default StarRating
