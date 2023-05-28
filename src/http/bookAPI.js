import {$authHost, $host} from "./ingex";


export const createGenre = async (genre) => {
    const {data} = await $authHost.post('genres/createGenre', {name: genre});
    return data;
}

export const fetchGenres = async () => {
    const {data} = await $host.get('genres');
    return data;
}



export const fetchBooks = async (genre, page, limit= 5) => {
    try {
        const {data} = await $host.get('books', {params: {genre: genre, page: page, limit: limit}});
        return data;
    } catch (e) {
        console.log("OOps");
        return {books: [], count: 1}
    }
}

export const searchBooks = async (name, type, page, limit) => {
    try {
        const {data} = await $host.get("books/SearchBooks", {params: {name, type, page, limit}})
        return data;
    } catch (e) {
        console.log("OOps");
        return {books: [], count: 1}
    }
}

export const fetchOneBooks = async (id) => {
    const {data} = await $host.get('books/' + id);
    return data;
}

export const createMedia = async (file) => {

    let bodyFormData = new FormData();
    bodyFormData.append('image', file);

    const {data} = await $authHost.post("media", bodyFormData)
    return data;
}

export const createBook = async (title, isbn, publisher, year, volume, description, authors, genres, count, imageUrl, urlForFile) => {
    const {data} = await $authHost.post('books', {title, isbn, publisher, year, volume, description, authors, genres, count, imageUrl, urlForFile});
    return data;
}