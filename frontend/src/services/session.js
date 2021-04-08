import { api } from "../api"

export const auth = async (email, password) => {
    const data = await api.post('/login', {
        email,
        password
    })

    return data
}

/**
 * Nenhum outro método precisará do header Authorization, já que estamos 
 * utilizando um interceptor, que irá adicionar esse header automaticamente
 * em todas as requisições que necessitam autorização. (src/api/index.js:9)
 */
export const getLoggedUser = async token => {
    const data = await api.get('/logged-user', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return data
}

/**
 * Essa rota necessita do header Authorization para fazer o logout, o
 * interceptor está pegando o token do state.session.user.token e settando
 * o header necessário de forma automatica.
 */
export const logout = async () => {
    await api.get('/logout')
}