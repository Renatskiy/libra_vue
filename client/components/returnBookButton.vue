<template>

<div>
<section>

  <button class="button is-warning is-small addButton" >Вернуть книгу</button>
  </section>
  </div>

</template>

<script>
  import {mapActions, mapState, mapMutations} from 'vuex';


  import books from 'store/books.js'
  import persone from 'store/persone.js';
  import orderBook from 'store/persone.js';
  import returnBookModal from 'components/returnBookModal';




  export default{
    components: {
      returnBookModal,
      
      },
      methods:{
      // ...mapMutations([
      //   'RETURN_MODAL_TOGGLE'
      // ]),
    },

    }

    </script>