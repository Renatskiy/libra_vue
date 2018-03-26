import Vue from 'vue'
import Vuex from 'vuex'
import createMutationsSharer from 'vuex-shared-mutations'
import activeUser from './activeUserStore.js'
import bookFilterStore from './bookFilter.js'
import bookIdForShow from './thisBookIdForShow.js'
import API from 'lib/api.js'


Vue.use(Vuex)




const state = {
  count: 0,
  isModalVisible: false,
  is_take_modal_open: false,
  is_return_open: false,
  autorizationModal_visible: false,
  new_user_modal: false,
  is_book_descr_modal_open: false,
  clicked_book: '',
  plugins: [createMutationsSharer({ predicate: ['CHANGE_USER_STATE', 'mutation2'] })],
    books:[]
}



const mutations = {
  ADD_BOOK(state, book) {
    state.books.push(book);
  },
    SET_BOOKS(state, books){
      state.books = books;
    },
  SET_MODAL_VISIBILITY(state) {
    state.isModalVisible = !state.isModalVisible;
  },
  TAKE_MODAL_TOGGLE(state) {
    state.is_take_modal_open = !state.is_take_modal_open;
  },
  RETURN_MODAL_TOGGLE(state) {
    state.is_return_open = !state.is_return_open;
  },
    AUTORIZATION_MODAL(state) {
    state.autorizationModal_visible = !state.autorizationModal_visible;
    },
    NEW_USER_MODAL(state) {
    state.new_user_modal  = !state.new_user_modal;
    },
    BOOK_DESCRIPT_MODAL(state) {
    state.is_book_descr_modal_open =!state.is_book_descr_modal_open;
    },


}

const getters = {
  get_all_books:({books})=> books
}

const actions = {

    close_by_click({commit}){
        commit('AUTORIZATION_MODAL');
    },

    async get_books({commit}){
        const books = await API.get_books();
        commit('SET_BOOKS', books);
  },
}




const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
    modules: {activeUser, bookFilterStore, bookIdForShow},
})

export default store
