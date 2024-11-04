import { API_URL } from '../configs/env.config';
import { fetchService } from '../utilities/fetch.utility';

const API = API_URL + `/auth`;

export const registerService = async (user) => {
    try {
        const response = await fetchService(`${API}/sign-up`, 'POST', user);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log({ 'Error al registrar usuario': error });
    }
}

export const loginService = async (user) => {
    try {
        const response = await fetchService(`${API}/sign-in`, 'POST', user);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error({ 'Error al logear usuario': error });
    }
}

export const sessionService = async () => {
    try {
        const response = await fetchService(`${API}/me`, 'GET');
        if (!response.ok) {
            return { user: null };
        }

        const user = await response.json();
        return user;
    } catch (error) {
        console.error({ 'Error al obtener sesion': error });
    }
}

export const logoutService = async () => {
    try {
        const response = await fetchService(`${API}/sign-out`, 'GET');
        return response;
    } catch (error) {
        console.error({ 'Error al cerrar sesion': error });
    }
}