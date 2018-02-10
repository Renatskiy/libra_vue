<template><div>
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
</style>