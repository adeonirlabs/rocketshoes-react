import axios from 'axios'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3333'
} else {
  baseURL = 'https://my-json-server.typicode.com/adeonir/rocketshoes-api'
}

const api = axios.create({
  baseURL,
})

export default api
