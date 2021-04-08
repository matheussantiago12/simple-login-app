import { getLoggedUser } from '../services/session'

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

const initialState = {
    user: {}
}

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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                user: action.payload
            }
        case LOGOUT:
            return {
                user: {}
            }
        default:
            return state
    }
}

export const getUserByToken = token => {
    return async dispatch => {
        try {
            const loggedUserResponse = await getLoggedUser(token)
            const user = loggedUserResponse.data

            dispatch(login(user))
        } catch (error) {
            console.log(error)
        }
    }
}

export default reducer
