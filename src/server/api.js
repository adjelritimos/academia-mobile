import axios from 'axios'

const api = axios.create({
    baseURL: 'http://194.210.91.209:5349/user/'
})

export default api