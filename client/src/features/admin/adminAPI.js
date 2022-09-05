import axios from 'axios'
import { BACK_END_URL } from '../../constant'

const SERVER_URL = `${BACK_END_URL}/products/`

const getProducts = () => {
  return axios.get(SERVER_URL)
}
const getProduct = (id) => {
  return axios.get(SERVER_URL + id)
}

const postProduct = (data) => {
  return axios.post(SERVER_URL, data)
}

const delProduct = (id) => {
  return axios.delete(SERVER_URL + id)
}

export default { postProduct, getProducts, getProduct, delProduct }