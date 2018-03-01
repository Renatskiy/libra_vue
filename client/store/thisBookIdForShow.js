import {mapActions, mapGetters, mapState, mapMutations} from 'vuex';
import activeUser from 'store/activeUser.js'
import Users from 'store/users.js'
import books from './books.js'

const bookIdForShow = {
    state: {
        thisBookIdForShow: "",
    },
    mutations:{
        BOOK_ID_FOR_SHOW(state, thisBookIdForShow) {
            state.thisBookIdForShow = thisBookIdForShow;
        },


    },
    getters: {
        thisBookIdForShow: ({thisBookIdForShow}) => thisBookIdForShow,
    },


}
export {
    bookIdForShow as default,

}