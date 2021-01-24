import axios from 'axios'

export default {
  async auth(data) {
    return axios.post('/auth', data)
  },
}