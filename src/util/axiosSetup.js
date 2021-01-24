import axios from 'axios'

export default function axiosSetup() {
  const token = localStorage.getItem('user-token')
  if (token) {
    axios.defaults.headers.common['Authorization'] = token
  }
  axios.defaults.baseURL = 'http://interview.agileengine.com/'
}