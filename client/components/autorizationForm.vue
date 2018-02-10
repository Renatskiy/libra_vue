<template>
    <form action=""  class="form">
        <h2 class="title">Зарегистрируйтесь в системе</h2>

        <!--v-for='field in fields' field in fields сделать-->

        <div class="field">
            <label class="label">Логин</label>
            <p class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="" v-model='user.login'>
                <span class="icon is-small is-left">
		      <i class="fa fa-child"></i>
		    </span>
            </p>
        </div>

        <div class="field">
            <label class="label">Пароль</label>
            <p class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="" v-model='user.password'>
                <span class="icon is-small is-left">
		      <i class="fa fa-child"></i>
		    </span>
            </p>
        </div>


        <div class="field is-grouped">
            <div class="control">
                <div class="button is-link" @click='enterSystem()'>Войти в систему</div>
            </div>
            <div class="control">
                <button class="button is-text" @click="close">Отменить</button>
            </div>
        </div>
    </form>
</template>

<script>
    import {mapActions, mapState, mapMutations} from 'vuex';
    import Users from 'store/users.js'
    import activeUser from 'store/activeUser.js'


    export default {
        mounted() {
        },
        methods:{
            enterSystem: function(){
                    const {login, password} = this.user;
                // console.log(this.user)
                    if (login && password) {

                        const Found = Users.filter(user => {
                            // console.log(user);
                                    return (user.login == login &&
                                        user.password === password

                            )
                        });
                        if(Found.length === 1){
                            Object.assign(activeUser, Found[0])
                            // console.log(activeUser)
                            this.closeModal();
                                return true;
                        }

                    }
            },

            ...mapMutations({
                closeModal: 'AUTORIZATION_MODAL'
            }),
            close(){
                this.closeModal();
            },
        },
        data: function(){
            return{
                //test,
                user: {
                    // name: '',
                    // lastName: '',
                    login: '',
                    password: '',
                    useBooksId: '',
                },
            }

        },
    }
</script>