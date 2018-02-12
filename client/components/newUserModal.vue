<template>
    <div class="modal is-active" v-if="new_user_modal">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <newUserForm/>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click='NEW_USER_MODAL'></button>
    </div>
</template>

<script>

    import newUserForm from 'components/newUserForm'
    import {mapState, mapActions, mapMutations} from 'vuex';
    export default {
        mounted() {

        },
        computed: mapState([
            'new_user_modal'
        ]),
        components: {
            newUserForm,
        },

        methods: {
            ...mapMutations([
                'NEW_USER_MODAL'
            ])
        }

    }

</script>