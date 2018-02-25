import {mapActions, mapGetters, mapState, mapMutations} from 'vuex';
import books from './books.js'

const bookIdForShow = {
    state: {
        thisBookIdForShow: '',
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