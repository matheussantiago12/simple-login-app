import { getLoggedUser } from '../../services/session'
import { LOGIN, LOGOUT} from './types'

export const login = user => {
    return {
        type: LOGIN,
        payload: user
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const setUserByToken = token => {
    return async dispatch => {
        try {
            const loggedUserResponse = await getLoggedUser(token)
            const user = loggedUserResponse.data

            dispatch(login({ ...user, token }))
        } catch (error) {
            console.log(error)
        }
    }
}