<template>
    <button class="button is-warning is-small addButton autorisButton" @click='NEW_USER_MODAL'>Новый пользователь</button>
</template>

 <script>
     import {mapActions, mapState, mapMutations} from 'vuex';
     export default {
         mounted() {
             return console.log('Авторизоваться')
         },

         components: {
             //
         },
         methods: {
             ...mapMutations([
                 'NEW_USER_MODAL'
             ])
         },
     }
 </script>
<style>
    .button.is-small.autorisButton{
        position: absolute;
        top: 0px;
        right: 80px;
    }
</style>