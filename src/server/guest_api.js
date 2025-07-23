import axios from 'axios'

const guest_api = axios.create({
    baseURL: 'http://localhost:5349/guest/'
})

export default guest_api