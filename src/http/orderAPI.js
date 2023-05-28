import {$authHost} from "./ingex";

export const takeBook = async (bookId) => {
    try {
        await $authHost.post('orders', {bookId});
        alert("Заявка успешно офрмлена")
    } catch (e) {
        alert(e.response.data.msg)
    }

}