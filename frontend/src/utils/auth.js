import useAuthStore from '../store/auth.Js';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import cookie from 'js-cookie';

export const login = async (email, password) => {
    try {
        const {data, status} = await axios.post('user/token/', {
            email,
            password
        });
        if (status === 200) {
            setAuthUser(data.access, data.refresh);
            // Alert

        } else {
            return {
                data, error: null
            };
        }
    } catch (error) {
        return {
            data: null,
            error: error.response.data?.detail || "something went wrong"
        };
        
    }
}

export const register = async (full_name, email, phone, password, password2) => {
    try {
        const {data} = await axios.post('user/register/', {
            full_name, 
            email, 
            phone, 
            password, 
            password2
        })
        await login(email, password);
        // alert
        return {
            data, error: null
        }
    } catch (error) {
        return {
            data: null,
            error: error.response.data?.detail || "something went wrong"
        };

    }
}

export const logout = async () => {
    cookie.remove('access_token');
    cookie.remove('refresh_token');
    useAuthStore.getState().setAuthUser(null);

    // alert 
}

export const setUser = async () => {
    const accessToken = cookie.get('access_token');
    const refreshToken = cookie.get('refresh_token');
    if (!accessToken || !refreshToken) {
        // const decoded = jwt_decode(access_token);
        // useAuthStore.getState().setAuthUser(decoded);
        return
    }

    if (isAccessTokenExpired(accessToken)) {
        const response = await getRefreshToken(refreshToken);
        setAuthUser(response.access, response.refresh);
    } else {
        setAuthUser(accessToken, refreshToken);
    }
}

export const setAuthUser = (accessToken, refreshToken) => {
    cookie.set('access_token', accessToken, {
        expires: 1,
        secure: true
    });
    cookie.set('refresh_token', refreshToken, {
        expires: 7,
        secure: true
    });
    const user = jwt_decode(accessToken) ?? null;
    if (user) {
        useAuthStore.getState().setUser(user);
    }
    useAuthStore.getState().setloading(false);
}

export const getRefreshToken = async () => {
   const refresh_token = cookie.get('refresh_token');
   const response = await axios.post('user/token/refresh/', {
    refresh: refresh_token
   })

   return response.data;
}

export const isAccessTokenExpired = (accessToken) => {
    try {
        const decodedToken = jwt_decode(accessToken);
        return decodedToken.exp < Date.now() / 100;
    } catch (error) {
        console.log(error);
        return true;
    }
}