<template>
<div>
<div>
  <div style="cursor: pointer;" class="media box" v-for='(user) in Users'  @click='show(index)'>
      <!--showBookForReturn(index)-->
      <!--v-for="book in booksForShow()"-->
    <div class="media-content">
            <div class="content">
              <p>
                <strong class="title">{{ user.name }}</strong>
                <br>
                <small>{{ user.login }}</small>
                <br>

                  <small>{{ user.useBooksId }}</small>
                  <br>



                <div class="media" v-for="(book) in books">
                <small>Книги в пользовании {{ bookIn.title }}</small>
                </div>

                <br>
              </p>
              <!--<strong class="title">{{ book.title  }} </strong>-->
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
  import Users from 'store/users.js';
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
          Users,
          actualBook: 2,

        }
      },
    mounted() {

        const br = function () {
            for(const itemUser of Users){
                for(const i in books){
                    let userBooks = itemUser.useBooksId
                        console.log(userBooks[i])
                }
            }
         };
         console.log(br());

        },




      computed: {
          bookIn: function () {
              return books[this.actualBook]
          }
      },
    methods: {
        booksForShow: function () {
//
//
        },


        show: function(index) {
            this.showModalReturn(index);

        },
        ...mapMutations({
            showModalReturn: 'RETURN_MODAL_TOGGLE'}),

      },
    }

  

</script>