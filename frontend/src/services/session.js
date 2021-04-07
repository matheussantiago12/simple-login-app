import { api } from "../api"

export const auth = async (email, password) => {
    const data = await api.post('/login', {
        email,
        password
    })

    return data
}

export const getLoggedUser = async token => {
    const data = await api.get('/logged-user', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return data
}

export const logout = async token => {
    await api.get('/logout', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}