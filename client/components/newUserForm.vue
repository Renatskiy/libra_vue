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
        </div><div class="field">
            <label class="label">Имя</label>
            <p class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="" v-model='user.name'>
                <span class="icon is-small is-left">
		      <i class="fa fa-child"></i>
		    </span>
            </p>
        </div><div class="field">
            <label class="label">Фамилия</label>
            <p class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="" v-model='user.lastName'>
                <span class="icon is-small is-left">
		      <i class="fa fa-child"></i>
		    </span>
            </p>
        </div>


        <div class="field is-grouped">
            <div class="control">
                <div class="button is-link" @click='add'>Создать пользователя</div>
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
            ...mapMutations({
                closeModal: 'NEW_USER_MODAL'
            }),
            close(){
                this.closeModal();
            },
            add(){
                var newUser = {};
                newUser.login = this.user.login;
                newUser.password = this.user.password;
                newUser.name = this.user.name;
                newUser.lastName = this.user.lastName;
                newUser.useBooksId = [];
                Users.push(newUser)
                console.log(Users);
                this.closeModal();
            }
        },



        data: function(){
            return{
                user: {
                    name: '',
                    lastName: '',
                    login: '',
                    password: '',
                },
            }

        },
    }
</script>