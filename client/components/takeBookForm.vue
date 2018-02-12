<template>
  <form action="" class="form">
    <h2 class="title">Взять книгу</h2>
      <div class="field">
      <label class="label">Заполните ФИО</label>
      <p class="control has-icons-left has-icons-right">

        <input class="input" type="text" placeholder="login" v-model="activeUser.login">
        <!--<input class="input" type="text" placeholder="lastName" v-model='input.lastName'>-->
        <input class="input" type="text" placeholder="Дата" v-model='input.date'>
        <span class="icon is-small is-left">
          <i class="fa fa-book"></i>
        </span>
      </p>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <div class="button is-link" @click='edit'>Take</div>
      </div>
      <div class="control">
        <button class="button is-text" @click="close">Отменить</button>
      </div>
    </div>

  </form>
</template>

<script>
  import {mapMutations} from 'vuex';
  import books from 'store/books.js'
  import persone from 'store/persone.js';
  import orderBook from 'store/persone.js';
  import Users from 'store/users.js';
  import activeUser from 'store/activeUser.js';

  export default{
    data: function(name, lastName, date){
      return {
        persone,
        books,
        input: {
          name: '',
          lastName: '',
          date: this.addDate(),
        },
          Users,
          activeUser,
      }
    },
    mounted(){
      // console.log('takeBookForm');
    },
    methods: {
      edit: function(name, lastName, book ){
        let z = localStorage.getItem('selectedBook');
        let bookItem = JSON.parse(z);

          for(const item in activeUser.useBooksId) {
//              console.log(ite
                  if (item == bookItem) {
                      alert('Еще одну??? Может первую сдашь сначала?');
                      this.closeWindow();
                      return false;
                  }

              }
//          console.log('error')
          activeUser.useBooksId.push(bookItem);
          this.closeWindow();
      },
        ...mapMutations({
            closeWindow: 'TAKE_MODAL_TOGGLE'
        }),
        close(){
          this.closeWindow();
        },
      addDate: function(){
          var date = new Date();
          var dateYear = date.getFullYear();
          var dateMonth = date.getMonth();
          var dateDay = date.getDate();
          var dateHour = date.getHours();
          var min = date.getMinutes()
          var nowDate = dateDay + ' ' + ++dateMonth + ' ' + dateYear + ' ' + dateHour + ':'+ min;
          return nowDate;
      }
    }
  }


</script>