import React, { useEffect } from 'react'

import Navbar from '../Components/Navbar'
import AddJob from '../Components/AddJob'
import Jobs from '../Components/Jobs'
import { useGlobalContext } from '../Context/context'


const Dashboard = () => {

    const { fetchJobs } = useGlobalContext()

    useEffect(() => {
        fetchJobs()
    }, [])

    return (
        <>
            <Navbar showUser />
            <AddJob />
            <Jobs />
        </>
    )

}


export default Dashboard
