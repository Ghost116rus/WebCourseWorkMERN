import {$authHost, $host} from "./ingex";


export const registration = async (email, password, fullName, mobilePhone, role) => {
    const response = await $host.post('auth/register', {email, fullName, mobilePhone, password, role: role});
    window.location.reload();
    return response.data;
}

export const login = async (email, password) => {
    const response = await $host.post('auth/login', {email, password});
    return response.data;
}

export const check = async (email, password) => {
    return localStorage.getItem("token");
}

export const getUserInfo = async () => {
    const response = await $authHost.get('auth/me');
    return response.data;
}

export const notRecieveBook = async (id) => {
    try {
        await $authHost.post('user/notRecieve', {id});
        alert("Успешно выполнено");
        window.location.reload();
    } catch (e) {
        alert(e.message())
    }
}

export const requestToReturnBook = async (id) => {
    try {
        const response = await $authHost.post('user/requestToReturn', {id});
        alert(response.data.msg);
    } catch (e) {
        alert(e.message())
    }
}