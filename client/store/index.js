import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  //books: [],
  isModalVisible: false,
  is_take_modal_open: false,
  is_return_open: false,
  autorizationModal_visible: false,
       
}

const mutations = {
  ADD_BOOK(state, book) {
    state.books.push(book);
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

}

const actions = {
 
  // setReturnModalVisiblity({commit}, visibleState) {
  //   commit('RETURN_MODAL_TOGGLE', visibleState);
  // },

}



const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
