<template>
<div>
<div>
  <div class="media box" v-for='(user) in Users'  >
      <!--showBookForReturn(index)-->
      <!--v-for="book in booksForShow()"-->
    <div class="media-content">
            <div class="content" style="display: block">
              <p>
                    <strong class="title">{{ user.name }}</strong>
                    <br>
                    <small>{{ user.login }}</small>
                    <br><small>Книги в пользовании :</small>

                    <div style="display: block" class="media" v-for="(book) in  showBookForUser(user) " @click='show(index)'>
                     <small>{{book.title}}</small>
                    <returnBookButton/>
                </p>
            </div>

                <br>

            </div>
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
        }
      },
    mounted() {
        },
          computed: {
          },
    methods: {
                showBookForUser: function (user) {
                    console.log(Users)
                  let userBooks = user.useBooksId;
                  let allBooks = this.books;
                  let arr = [];
                  for(let book of allBooks){
                      const {bookId} = book;
                      if(userBooks.includes(bookId)){
                          arr.push(book);

                      }
                  }return arr;
                },


        show: function(index) {
            this.showModalReturn(index);

        },
        ...mapMutations({
            showModalReturn: 'RETURN_MODAL_TOGGLE'}),

      },
    }

  

</script>