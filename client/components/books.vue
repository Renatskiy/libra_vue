<template>
	<section class="section">

		<!--<div class="books_find&#45;&#45;filter" style="cursor: pointer" @click="">-->
			<!--<div class="books_find" v-for="(book) in filteredBookForShow()">-->
				<!--<p class="books_find-item">{{ book.title }} <br> <span>{{ book.author }}</span></p>-->
			<!--</div>-->
		<!--</div>-->




	<div class="row" v-if="">
		<div class="books_preview books_preview--first-row" v-if="filteredBookForShow()">

					<div class="media box first-row" style="cursor: pointer;" v-for="(book, index) in filteredBookForShow()" @click='showBook(index)'>
						<div class="media-content">
							<div class="content">
								<p>
								<p class="image">
									<img :src="book.img">
								</p>

				        <strong class="title">{{ book.title }}</strong>
				        <br>
				        <small>{{ book.autor }}</small>
				        <br>
				      </p>
							</div>
						</div>
				</div>
		</div>


		<div class="books_preview" >

			<div class="books">
			<!-- <div v-model=''></div> -->
			<div style="cursor: pointer;" class="media box order-book" @click='click(selectedBook)'>
				  <!--<figure class="media-left" v-if="filteredBookForShow()">-->
				    <!--<p class="image">-->
				      <!--<img :src="filteredBookForShow()[this.selektedIndex].img">-->
				    <!--</p>-->
				  <!--</figure>-->
				<figure class="media-left" >
				    <p class="image">
				      <img :src="selectedBook.img">
				    </p>
				  </figure>
				  <div class="media-content">
				    <div class="content">
				      <p>
						  <!--<h1><p>{{ filteredBookForShow()[this.selektedIndex].title }}sdf</p></h1>-->
				        <strong class="title">{{ selectedBook.title }}</strong>
				        <br>
				        <small>{{ selectedBook.author }}</small>
				        <br>
				        <p>
				        	<small><p>{{ selectedBook.descr }}</p></small>
				        </p>
				      </p>
				    </div>
				    <nav class="level is-mobile" style="display: none">
				      <div class="level-left">
				        <a class="level-item">
				          <span class="icon is-small"><i class="fa fa-reply"></i></span>
				        </a>
				        <a class="level-item">
				          <span class="icon is-small"><i class="fa fa-retweet"></i></span>
				        </a>
				        <a class="level-item">
				          <span class="icon is-small"><i class="fa fa-heart"></i></span>
				        </a>
				      </div>
				    </nav>
				  </div>
				  <div class="media-right">
				    <!-- <button class="delete"></button> -->
				  </div>
				  <!-- </a> -->
				</div>
			</div>
			
	</div>
	</div>

	</section>
</template>

<style>
	.books_find-item{
		border: 1px solid #bbb;
		margin-bottom: 20px;
	}
	body {
		font-size: 16px !important;
	}

	.row{
		display: flex;
	}
	.books_preview{
		width: 40%;
	}
	.books_preview.books_preview--first-row{
		width: 60%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.media.box.first-row{
		height: 350px;
		width: 50%;
		display: block;
	}
	.media+.media{
		margin-top: 0;
	}
	.image{
		height: 50%;
		width: 128px;
	}
	.title{
		font-size: 1rem;
	}
	.books {
		height: 100%;
	}
	.media.box.order-book{
		height: 100%;
	}


</style>

<script>
	import {mapActions, mapState, mapMutations} from 'vuex';
	import books from 'store/books.js';
	import orderBook from 'store/persone.js'
	import persone from 'store/persone.js';
	import Users from 'store/users.js';
	import activeUser from 'store/activeUser.js';
	import bookFilterStore from 'store/bookFilter.js';
	//import test from 'store/test.js';

	export default {
		data() {
			return {
				books,
				selektedIndex: '0',
//                filteredBookForShow(){return false}
				//test
			}
		},
		computed: {
			selectedBook: function(){
				return this.filteredBookForShow()[this.selektedIndex];
			}
		},
		mounted() {
		},
		//если захожу под юзером и беру какую - нибудь книгу, то фильтр при первом фильтровании выдает ошибку
		//после того, как начинаю тыкать в книги, фильтра работает нормльно и все отлично

		methods: {
			...mapMutations({
				show: 'TAKE_MODAL_TOGGLE'}),

				click: function(selectedBook){
						this.show();

						var thisBook = JSON.stringify(selectedBook.bookId)
						localStorage.setItem('selectedBook', thisBook);

						var x = localStorage.getItem('selectedBook')

					},
					showBook: function(index){
						this.selektedIndex = index;
                        console.log(this.selektedIndex)
					},
					filteredBookForShow: function () {
                        const bookForFind = bookFilterStore.state.bookForFind;
                        const find = books.filter(i=>{return i.title.toLowerCase().indexOf(bookForFind.toLowerCase()) > -1});
                        if(find<=0){
                            return books
						}else return (find);

                    }
			}
		}
		
</script>
