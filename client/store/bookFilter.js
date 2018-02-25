import {mapActions, mapGetters, mapState, mapMutations} from 'vuex';
import activeUser from 'store/activeUser.js'
import Users from 'store/users.js'
import books from './books.js'

const bookFilterStore = {
    state: {
        bookForFind:"",
    },
    mutations:{

        SET_FIND_BOOK(state, bookForFind, books){
            // console.log(state.bookForFind)

            state.bookForFind = bookForFind;
        },

    },
    getters: {
        bookForFind: ({bookForFind}) => bookForFind,
    },


}
export {
    bookFilterStore as default,

}