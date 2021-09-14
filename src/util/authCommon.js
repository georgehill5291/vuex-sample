import axios from 'axios'
import setAuthToken from './../util/setAuthToken'
import constUtil from './constUtil'

export function getAuthToken() {
    return localStorage.getItem(constUtil.AUTH_TOKEN_KEY)
}

export const isLoggedIn = async () => {
    if (localStorage[constUtil.AUTH_TOKEN_KEY]) {
        setAuthToken(localStorage[constUtil.AUTH_TOKEN_KEY])
    }

    try {
        const response = await axios.get(`${constUtil.API_URL}/auth`)
        return response.data.success
    } catch (error) {
        console.log(error)
        return false
    }
}
