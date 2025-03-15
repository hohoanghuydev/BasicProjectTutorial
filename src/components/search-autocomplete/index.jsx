import React, { useEffect, useState } from 'react'

const SearchAutocomplete = () => {
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [users, setUsers] = useState([])

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
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Search Users Here...' className="search-users" />
        </div>
    )
}

export default SearchAutocomplete
