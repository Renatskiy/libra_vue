<template>
  <p>asdflkajsd;lkj</p>
</template>

<style>
  body {
    font-size: 16px !important;
  }
</style>




<script>
  import {mapActions, mapState, mapMutations} from 'vuex';
  import persone from 'store/persone.js';
  import books from 'store/books.js';
  import Users from 'store/users.js';

  export default {
    data() {
      return {
        books,
        persone,
      }
    },

    mounted() {
      this.$nextTick(function(){

      console.log("nextTick")
      })
      
    },
    methods: {

    },
  } 
</script>
