import {$host} from "./ingex";


export const registration = async (email, password) => {
    const response = await $host.post('auth/register', {email, password, role: 'ADMIN'});
    return response.data;


}

export const login = async (email, password) => {
    const response = await $host.post('auth/login', {email, password});
    return response.data;

}

export const check = async (email, password) => {
    return localStorage.getItem("token");
}