import React, { useEffect, useState } from 'react'
import './scroll.css'

const ScrollIndicator = ({ url }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [scrollPercentage, setScrollPercentage] = useState(0)

    const fetchData = async (getUrl) => {
        try {
            setLoading(true)

            const response = await fetch(getUrl)
            const data = await response.json()

            console.log(data)

            if (data && data.products && data.products.length > 0) {
                setProducts(data.products)
                setLoading(false)
            }
        } catch (e) {
            console.log(e)
            setErrorMessage(e.message)
        }
    }

    const handleScrollPercentage = () => {

        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled / height) * 100)
    }

    useEffect(() => {
        fetchData(url)
    }, [url])

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage)

        return () => {
            window.removeEventListener('scroll', () => { })
        }
    }, [])

    return (
        <div>
            <div className='top-container'>
                <h1>Scroll Indicator</h1>
                <div className="scroll-progres-tracking-container">
                    <div className="current-progress-bar" style={{ width: `${scrollPercentage}%` }}>

                    </div>
                </div>
            </div>
            <div className="scroll-container">
                {products && products.length &&
                    products.map(itemProduct => (
                        <p>{itemProduct.title}</p>
                    ))}
            </div>
        </div>
    )
}

export default ScrollIndicator
