import {$authHost} from "./ingex";


export const fetchLibrarians = async () => {
    const {data} = await $authHost.get('librarian/getAll');
    return data;
}

export const deleteGenre = async (id) => {
    try {
        await $authHost.delete('genres/delete/' + id);
        alert("Удаление прошло успешно");
        window.location.reload();
    } catch (e) {
        alert(e.message())
    }
}
