import {$authHost, $host} from "./ingex";


export const searchUsers = async (name, type) => {
    try {
        const {data} = await $authHost.get("user/SearchUser", {params: {name, type}})
        console.log(data);
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

