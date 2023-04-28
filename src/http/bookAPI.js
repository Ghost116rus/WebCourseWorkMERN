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
    console.log(page)
    console.log(limit)
    console.log(genre)
    const {data} = await $host.get('books', {params: {genre: genre, page: page, limit: limit}});
    return data;
}

export const fetchOneBooks = async (id) => {
    const {data} = await $host.get('books/' + id);
    return data;
}