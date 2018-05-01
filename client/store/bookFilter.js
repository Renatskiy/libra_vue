

const bookFilterStore = {
    state: {
        bookForFind:"",
        bookForFindItem:"",
    },
    mutations:{
        SET_FIND_BOOK(state, value){
            state.bookForFind = value;
            // console.log(state.bookForFind)
        },
        SET_FIND_BOOK_ITEM(state, value){
            state.bookForFindItem = value;
        },

    },
    getters: {
        get_book_for_find: ({bookForFind}) => bookForFind,
    },


}
export {
    bookFilterStore as default,

}