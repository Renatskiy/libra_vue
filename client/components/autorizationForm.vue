<template>
    <form action=""  class="form">
        <h2 class="title">Зарегистрируйтесь в системе</h2>

        <!--v-for='field in fields' field in fields сделать-->

        <div class="field">
            <label class="label">Логин</label>
            <p class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="" v-model='user_login'>
                <span class="icon is-small is-left">
		      <i class="fa fa-child"></i>
		    </span>
            </p>
        </div>

        <div class="field">
            <label class="label">Пароль</label>
            <p class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="" v-model='user_password'>
                <span class="icon is-small is-left">
		      <i class="fa fa-child"></i>
		    </span>
            </p>
        </div>


        <div class="field is-grouped">
            <div class="control">
                <div class="button is-link" @click='VALID_USER'>Войти в систему</div>
            </div>
            <div class="control">
                <button class="button is-text" @click="close">Отменить</button>
            </div>
        </div>
    </form>
</template>

<script>
    import {mapActions, mapGetters, mapState, mapMutations} from 'vuex';
    import Users from 'store/users.js'
    import activeUser from 'store/activeUser.js'
    import activeUserStore from 'store/activeUserStore.js'
    import createMutationsSharer from 'vuex-shared-mutations'



    export default {
        computed: {
            ...mapGetters([
                'selected_done_task',
                'login',
                'password'
            ]),
            user_login:{
                get: function () {
                   return this.login

                },
                set: function (e) {
                    this.SET_LOGIN(e)
                    // console.log(this.login)
                }
            },
            user_password:{
                get: function () {
                    // console.log(this.password)
                   return this.password
                },
                set: function (e) {

                    this.SET_PASSWORD(e)
                },
            },
        },
        mounted() {

            // console.log(this.selected_done_task)
            console.log(this.login)
            // console.log(this.userValid)
        },
        methods:{
            // enterSystem: function(){
            //             const login = this.user.login
            //     const password = this.user.password
            //     // const {login, password} = this.user; или можно так
            //     if (login && password) {
            //             const Found = Users.filter(user => {
            //
            //                         return (user.login === login &&
            //                             user.password === password
            //
            //                 )
            //             });
            //             if(Found.length === 1){
            //                 Object.assign(activeUser, Found[0])
            //                 this.closeModal();
            //                     return true;
            //             }
            //         }
            // },
            ...mapMutations({
                closeModal: 'AUTORIZATION_MODAL',
                VALID_USER: 'VALID_USER',
                SET_LOGIN: 'SET_LOGIN',
                SET_PASSWORD: 'SET_PASSWORD',
                MODAL_CLOSE: 'MODAL_CLOSE',
            }),
            closes() {
                console.log('sdfsdfsdfsdf')
                this.$store.dispatch('close_modal','autorizationModal_visible')
            },

            close(){
                this.closeModal();
            },
        },
        data: function(){
            return{
                //test,
                user: {
                    login: '',
                    password: '',
                    useBooksId: '',
                },
            }

        },
    }
</script>