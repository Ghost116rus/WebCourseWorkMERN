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

