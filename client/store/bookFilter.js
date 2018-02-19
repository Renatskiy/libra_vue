import {mapActions, mapGetters, mapState, mapMutations} from 'vuex';
import activeUser from 'store/activeUser.js'
import Users from 'store/users.js'

const bookFilterStore = {
    state: {
        bookForFind:"",
    },

    mutations:{
        SET_FIND_BOOK(state, bookForFind){
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