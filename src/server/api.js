import axios from 'axios'

const api = axios.create({
    baseURL: 'http://194.210.88.138:5349/user/'
})

export default api