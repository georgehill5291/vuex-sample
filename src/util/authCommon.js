import axios from 'axios'
import setAuthToken from './../util/setAuthToken'
import { authName, apiUrl } from './constant'

export function getAuthToken() {
    return localStorage.getItem(authName)
}

export const isLoggedIn = async () => {
    if (localStorage[authName]) {
        setAuthToken(localStorage[authName])
    }

    try {
        const response = await axios.get(`${apiUrl}/auth`)
        return response.data.success
    } catch (error) {
        console.log(error)
        return false
    }
}
