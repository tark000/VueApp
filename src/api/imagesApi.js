import axios from 'axios'

export default {
  async index(params) {
    return axios.get(`/images${params}`)
  },
  async get(id) {
    return axios.get('/images/' + id)
  },
}