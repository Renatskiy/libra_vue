<template>
  <form action="" method="" class="form">

      <h2 class="title">Вернуть книгу</h2>
    <div class="aray" v-for='index in Users'>
      <div class="field">
        <label class="label">Название</label>
        <p class="control has-icons-left has-icons-right">
          <div class="input" >{{ book }}
        <span class="icon is-small is-left">
            <i class="fa fa-book"></i>
          </span>
      </div>

        </p>
      </div>

    </div>
      <div class="field is-grouped">
        <div class="control">
          <div class="button is-link" @click="retuBookFromAr">Вернуть</div>
        </div>
        <div class="control">
          <button class="button is-text" @click="close">Отменить</button>
        </div>
      </div>

  </form>
</template>

<script>
    import {mapActions, mapState, mapMutations} from 'vuex';
    import addBookModal from 'components/addBookModal'
  import books from 'store/books.js'
  import persone from 'store/persone.js';
  import Users from 'store/users.js';

  export default {
    mounted() {
      // console.log(books[2]);
    },
      computed: {

        people: function () {
            return JSON.parse(localStorage.getItem('book', persone));
        },
          persones: function () {
              return JSON.parse(localStorage.getItem('this.persone'));
          },
      },
    methods:{

        ...mapMutations({
        closeWindow: 'RETURN_MODAL_TOGGLE'
            }),
        close:
            function () {
                this.closeWindow();
            },
        retuBookFromAr:
            function () {
                this.persones
                console.log(this.persones);

            }
        },

    data: function(){
      return{
        //test,
          Users,
        books,
        input: {
        title: '',
        descr: '',
        autor: '',
        img: ''},
      }

    },
  }
</script>