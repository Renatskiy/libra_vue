<template>
  <form action="" method="" class="form">
     <h2 class="title">Вернуть книгу</h2>
    <div class="field">
      <label class="label">Вернуть книгу</label>
      <p class="control has-icons-left has-icons-right">
      <div class="input" >
          <span class="icon is-small is-left">
              <i class="fa fa-book"></i>
          </span>
        <span>{{ this.activeUser.name }}</span>

      </div>
      <div class="input" v-for="book in showReturnBook()">
        <span class="icon is-small is-left"></span>
            <i class="fa fa-book"></i></span>
        <span >{{ book.title }}</span>

      </div>
    </div>

      <div class="field is-grouped">
        <div class="control">
          <div class="button is-link" @click="deleteBook()">Вернуть</div>
        </div>
        <div class="control">
          <button class="button is-text" @click="RETURN_MODAL_TOGGLE">Отменить</button>
        </div>
      </div>

  </form>
</template>

<script>
    import {mapActions, mapState, mapMutations, mapGetters} from 'vuex';
    import addBookModal from 'components/addBookModal'
  import activeUser from 'store/activeUser.js';
  import Users from 'store/users.js';

  export default {
    mounted() {
//      console.log(localStorage.getItem('bookIdKey'))
    },

      computed: {
          ...mapGetters([
              'get_all_books',
          ])

      },
    methods:{
        ...mapMutations({
            RETURN_MODAL_TOGGLE: 'RETURN_MODAL_TOGGLE'
            }),

        showReturnBook(){
            var item = localStorage.getItem('bookIdKey');

            const selectedBooks = item;

            for(const bookItem of selectedBooks){
                const book = this.get_all_books.filter(b =>{
                    return b.bookId == bookItem

                });
                this.selectedId = book[0].bookId;
//                console.log(this.selectedId)
                return book

            };

        },
        deleteBook(){

          var item = this.selectedId;
          var targetItem = activeUser.useBooksId;
            for(var u of targetItem){
                var forDelet = targetItem.filter(i=>
                {return i == item})
            }
            activeUser.useBooksId.splice(forDelet.indexOf(0), 1)
            this.RETURN_MODAL_TOGGLE();
            return forDelet

        },


        },


    data: function(){
      return{
        //test,
          Users,
          activeUser,
        books,
          selectedId: '',

      }

    },
  }
</script>