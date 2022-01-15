import React, { useContext, useReducer } from 'react'
import axios from 'axios'

import '../axios'
import reducer from './reducer'
import { 
    SET_LOADING, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_ERROR, 
    LOGOUT_USER, 
    CREATE_JOB_SUCCESS, 
    CREATE_JOB_ERROR, 
    FETCH_JOBS_SUCCESS, 
    FETCH_JOBS_ERROR,
    GET_JOB_SUCCESS,
    GET_JOB_ERROR,
    DELETE_JOB_SUCCESS,
    DELETE_JOB_ERROR,
    EDIT_JOB_SUCCESS,
    EDIT_JOB_ERROR
} from './actions'


const AppContext = React.createContext()


const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).name : null,
    isLoading: false,
    jobs: [],
    editItem: null,
    edited: false,
    showAlert: false,
    errorMessage: '.',
}


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const setLoading = () => {
        dispatch({ type: SET_LOADING })
    }

    const register = async (input) => {
        setLoading()
        try {
            const { data } = await axios.post('/auth/register', { ...input })
            dispatch({ type: LOGIN_USER_SUCCESS, payload: data.user.name })
            localStorage.setItem('user', JSON.stringify({ name: data.user.name, token: data.token }))
        } 
        catch (error) {
            dispatch({ type: LOGIN_USER_ERROR, payload: error.response.data.message })
        }
    }

    const login = async (input) => {
        setLoading()
        try {
            const { data } = await axios.post('/auth/login', { ...input })
            dispatch({ type: LOGIN_USER_SUCCESS, payload: data.user.name })
            localStorage.setItem('user', JSON.stringify({ name: data.user.name, token: data.token }))
        } 
        catch (error) {
            dispatch({ type: LOGIN_USER_ERROR, payload: error.response.data.message })
        }
    }

    const logout = () => {
        localStorage.removeItem('user')
        dispatch({ type: LOGOUT_USER })
    }

    const createJob = async (input) => {
        try {
            const { data } = await axios.post('/jobs', { ...input })
            dispatch({ type: CREATE_JOB_SUCCESS, payload: data.job })
        } 
        catch (error) {
            dispatch({ type: CREATE_JOB_ERROR, payload: error.response.data.message })
        }
    }

    const fetchJobs = async () => {
        setLoading()
        try {
            const { data } = await axios.get('/jobs')
            dispatch({ type: FETCH_JOBS_SUCCESS, payload: data.jobs })
        } 
        catch (error) {
            dispatch({ type: FETCH_JOBS_ERROR, payload: error.response.data.message })
            logout()
        }
    }

    const getJob = async (jobID) => {
        setLoading()
        try {
            const { data } = await axios.get(`/jobs/${jobID}`)    
            dispatch({ type: GET_JOB_SUCCESS, payload: data.job })
        } 
        catch (error) {
            dispatch({ type: GET_JOB_ERROR, payload: error.response.data.message })
            logout()
        }
    }

    const deleteJob = async (jobID) => {
        dispatch({ type: DELETE_JOB_SUCCESS, payload: jobID })
        try {
            await axios.delete(`/jobs/${jobID}`)
        } 
        catch (error) {
            dispatch({ type: DELETE_JOB_ERROR, payload: error.response.data.message })
        }
    }

    const editJob = async (jobID, input) => {
        setLoading()
        try {
            const { data } = await axios.patch(`/jobs/${jobID}`, { ...input })
            dispatch({ type: EDIT_JOB_SUCCESS, payload: data.job })
        } 
        catch (error) {
            dispatch({ type: EDIT_JOB_ERROR, payload: error.response.data.message })
        }
    }

    return (
        <AppContext.Provider 
            value={{
                ...state,
                register,
                login,
                logout,
                createJob,
                fetchJobs,
                getJob,
                deleteJob,
                editJob
            }}
        >
            {children}
        </AppContext.Provider>
    )

}


const useGlobalContext = () => {

    return useContext(AppContext)

}


export {

    AppProvider,
    useGlobalContext

}