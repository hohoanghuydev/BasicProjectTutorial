import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import featureFlagsDataServiceCall from '../data'

export const FeatureFlagsContext = createContext(null)

const FeatureFlagsGlobalContext = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [enableFlags, setEnableFlags] = useState({})

    const fetchData = async () => {
        try {
            setLoading(true)

            const response = await featureFlagsDataServiceCall()
            console.log(response)

            setEnableFlags(response)
            setLoading(false)
        } catch (e) {
            console.log(e)
            setLoading(false)
            throw new Error(e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <FeatureFlagsContext.Provider value={{ enableFlags }}>
            {children}
        </FeatureFlagsContext.Provider>
    )
}

export default FeatureFlagsGlobalContext
