import {$authHost, $host} from "./ingex";


export const searchUsers = async (name, type) => {
    try {
        const {data} = await $authHost.get("user/SearchUser", {params: {name, type}})
        return data;
    } catch (e) {
        console.log("OOps");
        return [];
    }
}

export const getUser = async (id) => {
    const response = await $authHost.get('/user/getUser', {params: {id: id}});
    return response.data;
}

export const giveBook = async (id) => {
    try {
        const {data} = await $authHost.patch('order/giveBook',{id: id});
        alert(data.message);
        window.location.reload();
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const noGiveBook = async (id) => {
    try {
        const {data} = await $authHost.patch('order/noGiveBook',{id: id});
        alert(data.message);
        window.location.reload();
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const recieveBook = async (id) => {
    try {
        const {data} = await $authHost.patch('order/recieveBook',{id: id});
        alert(data.message);
        window.location.reload();
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const noRecieveBook = async (id) => {
    try {
        const {data} = await $authHost.patch('order/noRecieveBook',{id: id});
        alert(data.message);
        window.location.reload();
    } catch (e) {
        alert(e.response.data.message)
    }
}


