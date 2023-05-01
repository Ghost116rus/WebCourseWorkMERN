import {$host} from "./ingex";


export const registration = async (email, password, fullName, mobilePhone) => {
    const response = await $host.post('auth/register', {email, fullName, mobilePhone, password, role: 1});
    return response.data;


}

export const login = async (email, password) => {
    const response = await $host.post('auth/login', {email, password});
    return response.data;

}

export const check = async (email, password) => {
    return localStorage.getItem("token");
}