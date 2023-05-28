import {$authHost} from "./ingex";

export const takeBook = async (bookId) => {
    try {
        await $authHost.post('orders', {bookId});
        alert("Заявка успешно офрмлена")
    } catch (e) {
        alert(e.response.data.msg)
    }
}


export const getActiveOrders = async () => {
    try {
        let response = await $authHost.get('/orders/activeOrders');
        console.log(response.data);
        return response.data;
    } catch (e) {

    }
}

export const getOrdersToReturn = async () => {
    try {
        let response = await $authHost.get('/orders/activeRequest');
        console.log(response.data);
        return response.data;
    } catch (e) {

    }
}