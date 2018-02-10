<template>
  <div class="modal is-active" v-if="is_take_modal_open">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <takeBookForm></takeBookForm>
      </div>
    </div>
    <div class="modal-close is-large" aria-label="close" @click='TAKE_MODAL_TOGGLE'></div>
  </div>
</template>

<script>
  import takeBookForm from 'components/takeBookForm';
  import {mapMutations, mapState} from 'vuex';

  export default {
    components:{
      takeBookForm,
    },
    data(){
      return{

      }

    },
    methods: {
      ...mapMutations([
        'TAKE_MODAL_TOGGLE'])
    },
    computed:{
      ...mapState([
        'is_take_modal_open'])
    },
    mounted(){

    },
  }
</script>