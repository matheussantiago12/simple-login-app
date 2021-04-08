import { getLoggedUser } from '../services/session'

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

const initialState = {
    session: {
        user: {}
    }
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
                session: {
                    user: action.payload
                }
            }
        case LOGOUT:
            return {
                session: {
                    user: {}
                }
            }
        default:
            return state
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

export default reducer
