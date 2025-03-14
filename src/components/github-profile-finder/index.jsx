import React, { useEffect, useState } from 'react'
import './styles.css'
import CardProfile from './card'

const GithubProfileFinder = () => {
    const [userName, setUserName] = useState('hohoanghuydev')
    const [data, setData] = useState('')
    const [loading, setLoading] = useState(false)

    const handleOnClick = () => {
        fetchData()
    }

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await fetch(`https://api.github.com/users/${userName}`)

            const dataResponse = await response.json()

            if (dataResponse) {
                setData(dataResponse)
                setLoading(false)
            }

            console.log(dataResponse)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (loading) {
        return <div>Data is loading ! please wait</div>
    }

    return (
        <div className='github-profile-finder-container'>
            <div className="input-wrapper">
                <input className='textbox-input-username' type="text" name='userName' placeholder='Input your username' onChange={(e) => setUserName(e.target.value)} value={userName} />
                <button className='button-search-profile' onClick={handleOnClick}>Search</button>
            </div>
            <div>
                <CardProfile user={data} />
            </div>
        </div>
    )
}

export default GithubProfileFinder
