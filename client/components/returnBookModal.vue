<template>
  <div class="modal is-active" v-if="is_return_open">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
              <returnBookForm/>
      </div>
    </div>
    <div class="modal-close is-large" aria-label="close" @click='RETURN_MODAL_TOGGLE'></div>
  </div>
</template>


<script>
  // import returnBookButton from 'components/returnBookButton';
  import returnBookForm from 'components/returnBookForm';
  import {mapActions, mapState, mapMutations} from 'vuex';

  export default {
    components:{
      returnBookForm,
    },
    data(){
      return{

      }

    },
    methods: {
      ...mapMutations({
          RETURN_MODAL_TOGGLE: 'RETURN_MODAL_TOGGLE'
      }),

    },
    computed: mapState([
      'is_return_open'
    ]),
    mounted(){
    },
  }
</script>