import Cookies from 'js-cookie';

export const getAccessToken = () => Cookies.get('access_token')
export const getRefreshToken = () => Cookies.get('refresh_token')
export const getUserProfile = () => Cookies.get('user_profile')

export const removeUserProfile = () => {
    Cookies.remove('user_profile');
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
    return true;
}

export const authenticate = async (user) => {
    Cookies.set('user_profile', {...user})
    Cookies.set('access_token', user.accessToken)
    Cookies.set('refresh_token', user.refreshToken)
    return true;
}