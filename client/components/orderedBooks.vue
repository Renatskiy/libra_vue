<template>
<div>
<div>
  <div style="cursor: pointer;" class="media box" v-for='(man, index) in people()' @click='show(index)'>
      <!--showBookForReturn(index)-->
    <div class="media-content">
            <div class="content">
              <p>
                <strong class="title">{{ man.name }}</strong>
                <br>
                <small>{{ man.lastName }}</small>
                <br>
                <small>Дата бронирования: {{ man.date }}</small>

                <br>
              </p>
              <strong class="title">{{ man.book }} {{ man.orderBook }}</strong>
            </div>
            <returnBookButton/>
        </div>
  </div>
</div>


</div>

</template>


<script>
import {mapActions, mapState, mapMutations} from 'vuex';
  import books from 'store/books.js'
  import persone from 'store/persone.js';
  import orderBook from 'store/persone.js';
  import returnBookButton from 'components/returnBookButton';
  import returnBookModal from 'components/returnBookModal'

  export default{
    components: {
    returnBookButton,
    returnBookModal,
  },
    data: function() {
      return {
          persone,
          books,

        }
      },
    mounted(){
      // console.log(persone[0]);
    },
    methods: {
      people(){
        return JSON.parse(localStorage.getItem('this.persone', persone));

        },
        show: function(index) {
            this.showModalReturn(index);
          // console.log(this.people()[index]);

            let returnBook = this.people()[index];
            var returnedBook = JSON.stringify(returnBook)
            localStorage.setItem('book', returnedBook);


        },
        ...mapMutations({
            showModalReturn: 'RETURN_MODAL_TOGGLE'}),

      },
    }

  

</script>