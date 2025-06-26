import axios from 'axios'

const BASE_URL = "http://localhost:3000/api"

export const addMood = (data) => {
    axios.post(`${BASE_URL}/addMood`, data)
}