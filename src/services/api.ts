import axios from "axios"

const instance = axios.create({
  baseURL: process.env.VITE_API_ENDPOINT,
})
export default instance
