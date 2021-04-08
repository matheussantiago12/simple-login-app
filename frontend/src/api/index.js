import axios from 'axios'
import { store } from '../ducks'

export const api = axios.create({
    baseURL: 'http://localhost:3333',
    responseType: 'json'
})

api.interceptors.request.use(config => {
    const state = store.getState()

    if (state.session.user.token) {
        config.headers["authorization"] = `Bearer ${state.session.user.token}`
    }

    return config
})
