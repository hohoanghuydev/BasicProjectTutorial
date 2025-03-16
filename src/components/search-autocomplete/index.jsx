import React, { useEffect, useState } from 'react'
import Suggesstions from './suggesstions'

const SearchAutocomplete = () => {
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [users, setUsers] = useState([])
    const [filterData, setFilterData] = useState([])
    const [dropShadow, setDropShadow] = useState(false)

    const fetchData = async () => {
        try {
            setLoading(true)

            const response = await fetch('https://dummyjson.com/users')

            const data = await response.json()

            if (data && data.users && data.users.length) {
                setUsers(data.users.map((item) => item.firstName))
                setLoading(false)
                setErrorMessage('')
            }

            // console.log(data.users)
        } catch (e) {
            console.log(e)
            setErrorMessage(e.message)
            setLoading(false)
        }
    }

    const handleOnChange = (e) => {
        const query = e.target.value.toLowerCase()
        setInput(query)

        if (query.length > 1) {
            const filteredData = users && users.length ? users.filter((item) => item.toLowerCase().indexOf(query) > -1) : []
            setFilterData(filteredData)
            setDropShadow(true)
            console.log(filteredData)
        } else {
            setDropShadow(false)
        }
    }

    const handleSelectOption = (text) => {
        setInput(text)
        setFilterData([])
        setDropShadow(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(users)

    if (loading) {
        return <div>Please wait! Data is loading.</div>
    }

    if (errorMessage !== '') {
        return <div>Error: {errorMessage}</div>
    }

    return (
        <div className='search-auto-complete'>
            {/* <h1>Hello</h1> */}
            <input type="text" value={input} onChange={(e) => handleOnChange(e)} placeholder='Search Users Here...' className="search-users" />

            {dropShadow ? <Suggesstions data={filterData} handleClickItem={handleSelectOption} /> : null}
        </div>
    )
}

export default SearchAutocomplete
