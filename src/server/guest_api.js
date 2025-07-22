import axios from 'axios'

const guest_api = axios.create({
    baseURL: 'http://192.168.1.239:5349/guest/'
})

export default guest_api