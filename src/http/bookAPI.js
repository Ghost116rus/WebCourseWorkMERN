import {$authHost, $host} from "./ingex";


export const createGenre = async (genre) => {
    const {data} = await $authHost.post('genres/', genre);
    return data;
}

export const fetchGenres = async () => {
    const {data} = await $host.get('genres');
    return data;
}

export const createBook = async (book) => {
    const {data} = await $authHost.post('books', book);
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