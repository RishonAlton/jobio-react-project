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


const reducer = (state, action) => {

    if (action.type === SET_LOADING) {
        return { ...state, isLoading: true }
    }

    if (action.type === LOGIN_USER_SUCCESS) {
        return { ...state, user: action.payload, isLoading: false, showAlert: false }
    }

    if (action.type === LOGIN_USER_ERROR) {
        return { ...state, isLoading: false, showAlert: true, errorMessage: action.payload }
    }

    if (action.type === LOGOUT_USER) {
        return { ...state, user: null, showAlert: false, jobs: [], editItem: null }
    }

    if (action.type === CREATE_JOB_SUCCESS) {
        return { ...state, isLoading: false, jobs: [...state.jobs, action.payload] }
    }

    if (action.type === CREATE_JOB_ERROR) {
        return { ...state, errorMessage: action.payload, isLoading: false, showAlert: true }
    }

    if (action.type === FETCH_JOBS_SUCCESS) {
        return { ...state, isLoading: false, jobs: action.payload, editItem: null, edited: false, showAlert: false }
    }

    if (action.type === FETCH_JOBS_ERROR) {
        return { ...state, isLoading: false, showAlert: true, errorMessage: action.payload }
    }

    if (action.type === GET_JOB_SUCCESS) {
        return { ...state, editItem: action.payload, isLoading: false }
    }

    if (action.type === GET_JOB_ERROR) {
        return { ...state, isLoading: false, editItem: null, errorMessage: action.payload }
    }

    if (action.type === DELETE_JOB_SUCCESS) {
        const newJobs = state.jobs.filter(job => job._id !== action.payload)
        return { ...state, isLoading: false, jobs: newJobs }
    }

    if (action.type === DELETE_JOB_ERROR) {
        return { ...state, isLoading: false, errorMessage: action.payload }
    }

    if (action.type === EDIT_JOB_SUCCESS) {
        return { ...state, isLoading: false, edited: true, editItem: action.payload, showAlert: false }
    }

    if (action.type === EDIT_JOB_ERROR) {
        return { ...state, isLoading: false, edited: true, errorMessage: action.payload, showAlert: true }
    }

    throw new Error(`No matching ${action} action type`)

}


export default reducer