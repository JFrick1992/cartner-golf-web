import axios from './../../config/axiosConfig.js'

const Authorization = {
    auth: () => axios.get('/api/authorize', { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` } }),
    authRound: rid => axios.get(`/api/authorize/round/${rid}`, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` } })
}

export default Authorization