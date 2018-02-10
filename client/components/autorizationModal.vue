<template>
    <div class="modal is-active" v-if="autorizationModal_visible">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <autorizationForm/>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click='AUTORIZATION_MODAL'></button>
    </div>
</template>

<script>
    // import autorizationForm from 'components/autorizationButton'
    // import autorizationButton from 'components/autorizationButton'
    import autorizationForm from 'components/autorizationForm'
    import {mapState, mapActions, mapMutations} from 'vuex';
    export default {
        mounted() {

        },
        computed: mapState([
            'autorizationModal_visible'
        ]),
        components: {
            // autorizationButton,
            autorizationForm
            //addBookButton
        },

        methods: {
            ...mapMutations([
                'AUTORIZATION_MODAL'
            ])
        }

    }

</script>