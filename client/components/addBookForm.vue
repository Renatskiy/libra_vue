<template>
	<form action=""  class="form">
		<h2 class="title">Добавить книгу</h2>

<!--v-for='field in fields' field in fields сделать-->

		<div class="field">
			<label class="label">Название</label>
		  <p class="control has-icons-left has-icons-right">
		    <input class="input" type="text" placeholder="" v-model='input.title'>
		    <span class="icon is-small is-left">
		      <i class="fa fa-book"></i>
		    </span>
		  </p>
		</div>

		<div class="field">
		  <label class="label">Автор</label>
		  <p class="control has-icons-left has-icons-right">
		    <input class="input" type="text" placeholder="" v-model='input.author'>
		    <span class="icon is-small is-left">
		      <i class="fa fa-child"></i>
		    </span>
		  </p>
		</div>


		<div class="field">
		  <label class="label">Картинка</label>
		  <p class="control has-icons-left has-icons-right">
		    <input class="input" type="text" placeholder="" v-model='input.img'>
		    <span class="icon is-small is-left">
		      <i class="fa fa-child"></i>
		    </span>
		  </p>
		</div>

		<div class="field">
		  <label class="label">Описание</label>

		  <div class="control">
		    <textarea class="textarea" v-model='input.descr' placeholder="Введите здесь краткое описание книги"></textarea>
		  </div>
		</div>

		<div class="field is-grouped">
		  <div class="control">
		    <div class="button is-link" @click='edit'>Добавить</div>
		  </div>
		  <div class="control">
		    <button class="button is-text" @click="close">Отменить</button>
		  </div>
		</div>
	</form>
</template>

<script>
	import addBookModal from 'components/addBookModal'
	import books from 'store/books.js';
	import activeUser from 'store/activeUser.js';
    import {mapActions, mapState, mapMutations,} from 'vuex';
    import API from 'lib/api.js'

    //import test from 'store/test.js'

	export default {
		mounted() {
			console.log(activeUser);
		},
		methods:{
			edit: function(title, descr, author, img){

				var newBook = {title: this.input.title, descr: this.input.descr, author: this.input.author, img: this.input.img,
                    bookCount: 1};
                API.insert_book(newBook);//прокидываю на сервак


				this.books.push(newBook);
				// console.log(books)
                this.close();

			},
            ...mapMutations({
                closeModal: 'SET_MODAL_VISIBILITY'
            }),
            close(){
                this.closeModal();
            },
		},
		data: function(){
			return{
				//test,
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
