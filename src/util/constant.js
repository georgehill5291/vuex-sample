export const apiUrl =
    process.env.VUE_APP_MY_ENV_VARIABLE !== 'production'
        ? 'http://localhost:4000/api'
        : process.env.VUE_APP_PROD_API_URL

export const authName = 'gauth'
