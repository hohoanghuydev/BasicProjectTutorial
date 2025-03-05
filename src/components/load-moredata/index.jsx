import React, { useEffect, useState } from 'react'
import '../load-moredata/styles.css';

const LoadMoreData = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [disableButton, setDisableButton] = useState(false)

    const fetchProducts = async () => {
        try {
            setLoading(true)

            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)

            const result = await response.json()
            console.log(result)
            if (result && result.products && result.products.length) {
                setProducts((preProducts) => count !== 0 ? [...preProducts, ...result.products] : [...result.products])
                setLoading(false)
            }
        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    }

    const handleLoadMore = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        fetchProducts()
    }, [count])

    useEffect(() => {
        if (products.length === 100) setDisableButton(true)
    }, [products])

    if (loading) {
        return <div>Please wait ! Data is loading</div>
    }

    return (
        <div className='container2'>
            <div className='products-container'>
                {
                    products && products.length && products.map(item => (
                        <div className='product' key={item.id}>
                            <img src={item.thumbnail} alt="" className='img-product' />
                            <h4>{item.title}</h4>
                            <p>{item.price}</p>
                        </div>
                    ))
                }
            </div>
            <div>
                <button disabled={disableButton} type="button" onClick={handleLoadMore}>Load more</button>
                {
                    disableButton ? <div>You are reached to 100 products</div> : null
                }
            </div>
        </div>
    )
}

export default LoadMoreData
