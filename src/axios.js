import axios from 'axios'


axios.defaults.baseURL = 'https://jobs-express-api.herokuapp.com/api'


axios.interceptors.request.use((req) => {

    const user = localStorage.getItem('user')

    if (user) {
        const { token } = JSON.parse(localStorage.getItem('user'))
        req.headers.authorization = `Bearer ${token}`
    }

    return req

})