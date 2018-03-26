import {get, post} from './axios'

const API = {
    async insert_book(book){
        return await post('book', book);
    },
    async get_books(books){
        return await get('books', books);
    },
}

export {API as default}