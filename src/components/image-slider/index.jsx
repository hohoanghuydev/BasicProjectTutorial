import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './styles.css'

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errorMessage, setErrorMessage] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchImages = async (getUrl) => {
        try {
            setLoading(true)

            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await response.json()

            if (data) {
                setImages(data)
                setLoading(false)
            }
        } catch (error) {
            setErrorMessage(error)
        }
    }

    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

    const handlePrevious = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }

    useEffect(() => {
        if (url !== '')
            fetchImages(url)

    }, [url])

    if (loading) {
        return <div>Please wait</div>
    }

    if (errorMessage) {
        return <div>Error occured! {errorMessage}</div>
    }

    console.log(images)

    return (
        <div className='container'>
            <BsArrowLeftCircleFill className='arrow arrow-left' onClick={handlePrevious} />

            {
                images && images.length ?
                    images.map((itemImage, index) =>
                        <img
                            key={itemImage.id}
                            className={currentSlide === index ? 'current-image' : 'current-image hide-current-image'}
                            alt={itemImage.download_url}
                            src={itemImage.download_url}
                        />
                    )
                    : null
            }

            <BsArrowRightCircleFill className='arrow arrow-right' onClick={handleNext} />

            <span className="circle-indicators">
                {
                    images && images.length ?
                        images.map((_, index) =>
                            <button
                                key={index}
                                className={currentSlide === index ? 'current-indicator' : 'current-indicator inactive-current-indicator'}
                                onClick={() => setCurrentSlide(index)}
                            ></button>
                        )
                        : null
                }
            </span>
        </div>
    )
}

export default ImageSlider
