

const bookFilterStore = {
    state: {
        bookForFind:"",
    },
    mutations:{

        SET_FIND_BOOK(state, bookForFind, books){
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