import axios from 'axios'

const api = axios.create({
    baseURL: 'http://194.210.88.53:5349/user/'
})

export default api