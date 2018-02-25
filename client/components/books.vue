<template>
	<section class="section">

	<div class="row" v-if="">
		<div class="books_preview books_preview--first-row">
					<div class="media box first-row" style="cursor: pointer;" v-for="(book, index) in filteredBookForShow()" @click='click(book.bookId)'>
						<div class="media-content">
							<div class="content">

								<p class="image">
									<img :src="book.img">
								</p>

				        <div>
							<strong class="title">{{ book.title }}</strong>
							<small>{{ book.author }}</small>
						</div>
				        <br>

				        <br>
				      </p>
							</div>
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

	.media-content{
		height: 100%;
	}
	.media-content > .content {
		height: 100%;
		display: flex;
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
		height: 100px;
		width: 100%;
		display: block;
	}
	.media+.media{
		margin-top: 0;

	}
	.image{
		height: 100%;
		width: 128px;
	}
	.image > img {
		height: 100%;
		width: unset;
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
	.content > div > strong {
		display: block;
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
				show: 'BOOK_DESCRIPT_MODAL'}),
			//TAKE_MODAL_TOGGLE - всунуть в мутацию для взятия книги


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
                            return {};
						}else{console.log(find); return (find)};

                    }
			}
		}
		
</script>
