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

  export default {
    data() {
      return {
        books,
        persone,
      }
    },
    // computed: mapState([
    //      'books'
    //    ]),
    mounted() {
      this.$nextTick(function(){
        // setTimeout(() => {
      //  this.name = 'Test';
      //  this.addBook( 'New book' )
      // }, 300)
      console.log("nextTick")
      })
      
    },
    methods: {
      // create(title){

      // },
      // ...mapActions([
      //  'addBook'
      // ])
    },
  } 
</script>
