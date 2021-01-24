import authApi from '@/api/authApi'
import axios from 'axios'

export function getToken() {
  return new Promise((resolve, reject) => {
    authApi.auth({ "apiKey": "23567b218376f79d9415" }).then(resp => {
      localStorage.setItem('user-token', 'Bearer ' + resp.data.token)
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + resp.data.token
      resolve()
    }, (error) => {
      reject(error)
      alert('Invalid apiKey')
    })
  })

}