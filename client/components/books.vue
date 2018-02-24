<template>
	<section class="section">

	<div class="row" v-if="">
		<div class="books_preview books_preview--first-row" v-if="">
					<div class="media box first-row" style="cursor: pointer;" v-for="(book, index) in filteredBookForShow()" @click='click(book.bookId)'>
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


		<!--<div class="books_preview" >-->

			<!--<div class="books">-->
			<!--&lt;!&ndash; <div v-model=''></div> &ndash;&gt;-->
			<!--<div style="cursor: pointer;" class="media box order-book" @click='click(selectedBook)'>-->

				<!--<figure class="media-left" >-->
				    <!--<p class="image">-->
				      <!--<img :src="selectedBook.img">-->
				    <!--</p>-->
				  <!--</figure>-->
				  <!--<div class="media-content">-->
				    <!--<div class="content">-->
				      <!--<p>-->
						  <!--&lt;!&ndash;<h1><p>{{ filteredBookForShow()[this.selektedIndex].title }}sdf</p></h1>&ndash;&gt;-->
				        <!--<strong class="title">{{ selectedBook.title }}</strong>-->
				        <!--<br>-->
				        <!--<small>{{ selectedBook.author }}</small>-->
				        <!--<br>-->
				        <!--<p>-->
				        	<!--<small><p>{{ selectedBook.descr }}</p></small>-->
				        <!--</p>-->
				      <!--</p>-->
				    <!--</div>-->
				    <!--<nav class="level is-mobile" style="display: none">-->
				      <!--<div class="level-left">-->
				        <!--<a class="level-item">-->
				          <!--<span class="icon is-small"><i class="fa fa-reply"></i></span>-->
				        <!--</a>-->
				        <!--<a class="level-item">-->
				          <!--<span class="icon is-small"><i class="fa fa-retweet"></i></span>-->
				        <!--</a>-->
				        <!--<a class="level-item">-->
				          <!--<span class="icon is-small"><i class="fa fa-heart"></i></span>-->
				        <!--</a>-->
				      <!--</div>-->
				    <!--</nav>-->
				  <!--</div>-->
				  <!--<div class="media-right">-->
				    <!--&lt;!&ndash; <button class="delete"></button> &ndash;&gt;-->
				  <!--</div>-->
				  <!--&lt;!&ndash; </a> &ndash;&gt;-->
				<!--</div>-->
			<!--</div>-->

	<!--</div>-->
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
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.media.box.first-row{
		height: 350px;
		width: 100%;
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
//	import orderBook from 'store/persone.js'
//	import persone from 'store/persone.js';
//	import Users from 'store/users.js';
//	import activeUser from 'store/activeUser.js';
    import bookFilterStore from 'store/bookFilter.js';
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

//  Надо сделать единый метод приема индекса для книг и оттуда передавать уже и в showBook и в filteredBookForShow

		methods: {
			...mapMutations({
				show: 'TAKE_MODAL_TOGGLE'}),

				click: function(selectedBook){
						this.show();

						var thisBook = JSON.stringify(selectedBook)
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
                        if(find.length<=0){
                            return books;
						}else{console.log(find); return (find)};

                    }
			}
		}
		
</script>
