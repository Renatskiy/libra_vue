
import {mapActions, mapGetters, mapState, mapMutations} from 'vuex';
import activeUser from 'store/activeUser.js'
import Users from 'store/users.js'

const activeUserStore = {
    // Свойства объекта
    state: {
        login:"",
        password:"",
        done: [
            '12',
            '34',

        ],
        selected_done_task: 1,
        user: activeUser,
    },

    // Изменение свойств объекта
    mutations:{
        VALID_USER(state) {
            function valid() {
                // console.log(state.login)
                // console.log(state.password)
                const {login, password} = state;
                // const {login, password} = this.user; или можно так

                if (login && password) {
                    const Found = Users.filter(user => {

                        return (user.login === login &&
                            user.password === password

                        )
                    });
                    if (Found.length === 1) {
                        Object.assign(activeUser, Found[0]);

                        return true;
                    }
                }
            }valid();
        },
        SET_LOGIN(state, login){
            state.login = login;
        },
        SET_PASSWORD(state, password){
            state.password = password;
        },


    },




    // Получение свойств объекта
    getters:{
        selected_done_task: state => state.done[state.selected_done_task],
        login: ({login}) => login,
        password: ({password}) => password,

    },
    // Асинхронные изменения свойств объекта
    actions:{
        async_user_active_change({commit}, user_active){
            commit('CHANGE_USER_STATE', user_active)
        },
        close_modal({commit}, autorizationModal_visible){
            commit('AUTORIZATION_MODAL', autorizationModal_visible)
        }
    },
    methods: {
        // closes() {
        //     console.log('sdfsdfsdfsdf')
        //     this.$store.dispatch('close_modal','autorizationModal_visible')
        // },
    }
}




export {
    activeUserStore as default,

}