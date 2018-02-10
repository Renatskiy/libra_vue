<template>
	<section class="section">
	<div class="row">
		<div class="books_preview books_preview--first-row">

					<div class="media box first-row" style="cursor: pointer;" v-for="(book, index) in books" @click='showBook(index)'>
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
		<div class="books_preview">

			<div class="books">
			<!-- <div v-model=''></div> -->
			<div style="cursor: pointer;" class="media box order-book" @click='click(selectedBook)'>
				  <figure class="media-left">
				    <p class="image">
				      <img :src="selectedBook.img">
				    </p>
				  </figure>
				  <div class="media-content">
				    <div class="content">
				      <p>
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
	//import test from 'store/test.js';

	export default {
		data() {
			return {
				books,
				selektedIndex: 2,
				//test
			}
		},
		computed: {
			selectedBook: function(){
				return books[this.selektedIndex];
			}
		},
		mounted() {
			this.$nextTick(function(){
			})

		},

		methods: {
			...mapMutations({
				show: 'TAKE_MODAL_TOGGLE'}),

				click: function(selectedBook){
						this.show();
						console.log(selectedBook.title)

						var thisBook = JSON.stringify(selectedBook.title)
						localStorage.setItem('selectedBook', thisBook);
						
						var x = localStorage.getItem('selectedBook')
						console.log(x);

					},
					showBook: function(index){
						this.selektedIndex = index;
					}
			}
		}
		
</script>
