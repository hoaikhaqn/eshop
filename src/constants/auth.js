import Cookies from 'js-cookie'

const redirectToLogin = () => {
    window.location.replace(
        `${getConfig().LOGIN_URL}?next=${window.location.href}`
    )
}

export const getAccessToken = () => Cookies.get('access_token')
export const getRefreshToken = () => Cookies.get('refresh_token')
export const isAuthenticated = () => !!getAccessToken()
export const getUserProfile = () => Cookies.get('user_profile')

export const authenticate = async (user) => {
    Cookies.set('user_profile', { username: user.username, email: user.email })
    // Cookies.set('access_token', user.access_token)
    Cookies.set('refresh_token', user.refreshToken)
    return true;
}

