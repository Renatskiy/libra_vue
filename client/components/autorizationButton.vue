<template>
<div class="login-button">
    <button class="button is-warning is-small addButton" @click='AUTORIZATION_MODAL'>Login</button>
</div>
</template>

<script>
    import {mapActions, mapState, mapMutations} from 'vuex';
    export default {
        mounted() {
            return console.log('button component')
        },

        components: {
            // addBookModal
        },
        methods: {
            ...mapMutations([
                'AUTORIZATION_MODAL'
            ]),
        }

    }
</script>
<style>
    .button.is-small{
        position: relative;
    }
    .login-button{
        position: absolute;
        top: 0;
        right: 0;
    }
</style>