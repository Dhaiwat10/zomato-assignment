import axios from 'axios'

export default axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1/search',
  headers: {
    'user-key': '9e717319004e80cefa5f754a82d030e7'
  }
})