import axios from 'axios'

const api_qr = axios.create({
    baseURL: 'http://192.168.1.187:5349/'
})

export default api_qr