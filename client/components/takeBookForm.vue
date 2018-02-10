<template>
  <form action="" class="form">
    <h2 class="title">Взять книгу</h2>
      <div class="field">
      <label class="label">Заполните ФИО</label>
      <p class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="name" v-model='input.name'>
        <input class="input" type="text" placeholder="lastName" v-model='input.lastName'>
        <input class="input" type="text" placeholder="date" v-model='input.date'>
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

      }
    },
    mounted(){
      // console.log('takeBookForm');
    },
    methods: {
      edit: function(name, lastName, book ){
        let z = localStorage.getItem('selectedBook');
        let bookItem = JSON.parse(z)

          var newPersone = {name: this.input.name, lastName: this.input.lastName, date:this.addDate(), book: bookItem};
            this.persone.push(newPersone);
            console.log(newPersone);

            var persone = JSON.stringify(this.persone)
            localStorage.setItem('this.persone', persone);
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