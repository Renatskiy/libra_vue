import {get, post} from './axios'

const API = {
    async insert_book(book){
        return await post('book', book);
    }
}

export {API as default}