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
        let close = this.closeWindow();

        var act = new Promise(function (resolve, reject) {
            resolve(activeUser.useBooksId.filter(i=>bookItem == i))
        })
          act.then(function (result) {

              if(result.length == 0){
                  activeUser.useBooksId.push(bookItem);
                  console.log(Users)
                  // for(let user of Users){
                  //     let userBooks = user.useBooksId;
                  //     let takeBook = bookItem;
                  //     if(userBooks.includes(takeBook)){
                  //         // userBooks.push(bookItem)
                  //         console.log(Users)
                  //           return false;
                  //
                  //     }
                  // }

                  // this.user.useBooksId.push(bookItem);
              }else{
                  alert('Еще одну???');
              }
              close;
          })


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