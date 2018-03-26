<template>
  <form action="" class="form">
    <h2 class="title">Взять книгу</h2>
      <div class="field">
      <label class="label">Заполните ФИО</label>
      <p class="control has-icons-left has-icons-right">

        <div class="input"  v-if="activeUser.login">{{ activeUser.login }}</div>
        <div class="input"  v-else>Пользователь не авторизован</div>
        <!--<input class="input" type="text" placeholder="lastName" v-model='input.lastName'>-->
        <input class="input" type="text" placeholder="Дата" v-model='input.date'>
        <span class="icon is-small is-left">
          <i class="fa fa-book"></i>
        </span>
      </p>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <div class="button is-link" @click='edit'>Взять</div>
      </div>
      <div class="control">
        <button class="button is-text" @click="close">Отменить</button>
      </div>
    </div>

  </form>
</template>

<script>
  import {mapMutations, mapGetters} from 'vuex';
  import persone from 'store/persone.js';
  import orderBook from 'store/persone.js';
  import Users from 'store/users.js';
  import activeUser from 'store/activeUser.js';

  export default{
    data: function(name, lastName, date){
      return {
        persone,
        input: {
          name: '',
          lastName: '',
          date: this.addDate(),
        },
          Users,
          activeUser,
      }
    },
      computed: {
          ...mapGetters([
              'get_all_books',
          ])
      },
    mounted(){
      // console.log('takeBookForm');
    },
    methods: {
      edit: function(name, lastName, book ) {
          let z = localStorage.getItem('selectedBook');
          let bookItem = JSON.parse(z);
          let close = this.closeWindow();


          if (activeUser.login.length > 0) {
              var act = new Promise(function (resolve, reject) {
                  resolve(activeUser.useBooksId.filter(i => bookItem == i))
              })
              act.then(function (result) {

              if (result.length == 0) {
                  activeUser.useBooksId.push(bookItem);
//                    var checkBookCount = (x,y)=>x.filter(i=> y.indexOf(i)> -1)

              } else {
                  alert('Еще одну???');
              }
              close;
          })
      }else{
              alert('сначала залогинься')
              return false
          }


      },

        active: function () {
            if(activeUser.login.length > 0){
                return true
            }
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