import {mapActions, mapGetters, mapState, mapMutations} from 'vuex';
import activeUser from 'store/activeUser.js'
import Users from 'store/users.js'

const bookIdForShow = {
    state: {
        thisBookIdForShow: "",
    },
    mutations:{
        BOOK_ID_FOR_SHOW(state, thisBookIdForShow) {
            state.thisBookIdForShow = thisBookIdForShow;
            // console.log(this.getters.get_thisBookIdForShow +'  123')
        },


    },
    getters: {
        get_thisBookIdForShow: ({thisBookIdForShow}) => thisBookIdForShow,
       
    },


}
export {
    bookIdForShow as default,

}